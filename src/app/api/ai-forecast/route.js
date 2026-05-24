import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { score, snowIn, tempF, windMph, precipHrs, city, schoolType } =
      await request.json();

    const labels = {
      rural: "rural public school",
      suburban: "suburban public school",
      urban: "urban public school",
      private: "private/prep school",
      boarding: "boarding school",
    };

    const schoolLabel = labels[schoolType] || "school";

    if (process.env.ANTHROPIC_API_KEY) {
      const prompt = `You are an expert, slightly witty snow day forecaster. A student at a ${schoolLabel} in ${city} wants a snow day tomorrow.

Forecast: ${Number(snowIn).toFixed(1)} inches of snow expected, overnight low ${Math.round(tempF)}°F, winds up to ${Math.round(windMph)} mph, ${precipHrs} hours of precipitation.

Snow day probability: ${score}%.

Write exactly 3 sentences: a weather observation, an assessment for their school type, and a witty conclusion. Be confident and a little fun. Do NOT start with "I" or list the raw statistics again.`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 200,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.content?.[0]?.text;
        if (text) {
          return NextResponse.json({ text });
        }
      }
    }

    // Fallback template algorithm
    const n = score;
    const fb =
      n >= 70
        ? `The forecast for ${city} is looking seriously wintry — ${Number(
            snowIn
          ).toFixed(
            1
          )}" of snow with brutal temperatures. For a ${schoolLabel}, this is exactly the kind of storm that gets schools closed. Set your alarm just in case, but don't do your homework yet.`
        : n >= 40
        ? `${city} is in the snowball zone — enough snow to make things interesting but not a slam dunk. It's a classic borderline call for a ${schoolLabel}, so watch the early-morning weather updates. Pack your backpack but keep your fingers crossed.`
        : `The storm headed for ${city} looks more bark than bite — not quite enough to convince school administrators to cancel. For a ${schoolLabel}, you'd need a bit more accumulation. Plan on going to school, but stranger things have happened.`;

    return NextResponse.json({ text: fb });
  } catch (error) {
    return NextResponse.json(
      { error: "Error generating forecast: " + error.message },
      { status: 500 }
    );
  }
}
