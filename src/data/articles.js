export const articles = [
  {
    slug: "how-do-schools-decide-snow-days",
    title: "How Do Superintendents Decide on Snow Days?",
    description: "Discover the secret formula and factors that school districts use to call a snow day.",
    content: `
      <h2>The Decision Making Process</h2>
      <p>Calling a snow day is one of the most stressful decisions a superintendent makes. While students excitedly watch the forecast, school administrators are up at 3:00 AM coordinating with local police, highway departments, and meteorologists.</p>
      
      <h3>Key Factors Considered</h3>
      <ul>
        <li><strong>Road Conditions:</strong> Can school buses safely navigate hills and unplowed secondary roads?</li>
        <li><strong>Timing of the Storm:</strong> A storm hitting at 5:00 AM is far more likely to cancel school than one starting at noon.</li>
        <li><strong>Temperature and Wind Chill:</strong> Severe cold can cause frostbite for students waiting at bus stops, leading to cancellations even without snow.</li>
        <li><strong>Facility Readiness:</strong> Can the school's maintenance staff clear the parking lots and sidewalks in time?</li>
      </ul>
      
      <p>Ultimately, safety is the primary concern. If there is a significant risk of buses getting stuck or students getting injured on their way to school, the superintendent will cancel classes.</p>
    `,
    date: "2025-01-10",
    author: "SnowLoad Team"
  },
  {
    slug: "history-of-snow-days",
    title: "A Brief History of the American Snow Day",
    description: "From one-room schoolhouses to remote learning: how snow days have evolved.",
    content: `
      <h2>The Origins of the Snow Day</h2>
      <p>The concept of the "snow day" didn't really exist until the advent of the school bus in the early 20th century. Before then, children who lived close enough to walk to their one-room schoolhouses were expected to attend regardless of the weather, unless conditions were completely impassable.</p>
      
      <h3>The Golden Era of Snow Days</h3>
      <p>As school districts consolidated and busing became the norm in the 1950s and 60s, snow days became a regular part of American childhood. Watching the local morning news to see if your school scrolled across the bottom of the screen became a winter ritual.</p>
      
      <h3>The Impact of Technology</h3>
      <p>Today, with the rise of remote learning and digital classrooms, the traditional snow day is evolving. Many districts now opt for "virtual learning days" instead of full cancellations, allowing education to continue while keeping students safe at home.</p>
    `,
    date: "2025-01-15",
    author: "SnowLoad Team"
  },
  {
    slug: "top-5-snowiest-cities-us",
    title: "Top 5 Snowiest Cities in the United States",
    description: "These cities get the most snow, but do they get the most snow days?",
    content: `
      <h2>Where the Snow Falls Hardest</h2>
      <p>If you love snow days, you might think moving to the snowiest cities is a good idea. But ironically, cities that get the most snow are often the best prepared to handle it, meaning fewer snow days!</p>
      
      <ol>
        <li><strong>Syracuse, New York:</strong> Averaging over 120 inches of snow a year, largely due to lake-effect snow from Lake Ontario. Despite this, Syracuse schools rarely close.</li>
        <li><strong>Erie, Pennsylvania:</strong> Another victim of lake-effect snow, Erie routinely sees massive winter storms.</li>
        <li><strong>Rochester, New York:</strong> Close behind Syracuse, Rochester is well-equipped with fleets of plows.</li>
        <li><strong>Buffalo, New York:</strong> Famous for extreme blizzard events, Buffalo often measures snow in feet rather than inches.</li>
        <li><strong>Boulder, Colorado:</strong> While known for sunshine, Boulder's elevation leads to significant snowfall totals during winter storms.</li>
      </ol>
      
      <p>In contrast, a city like Atlanta, Georgia, might only get 2 inches of snow but will shut down for days because they lack the infrastructure to clear the roads.</p>
    `,
    date: "2025-02-02",
    author: "SnowLoad Team"
  }
];

export const getAllArticles = () => articles;
export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);
