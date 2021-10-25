function generateMarkdown(data) {
  let license = "## License";
  let licenseBadge = "";
  let contribution =
      "[Contributor Covenant](https://www.contributor-covenant.org/)";

  switch (data.license) {
      case "None":
          license = "";
          break;
      case "Apache License 2.0":
          licenseBadge =
              "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          break;
      case "Boost Software License":
          licenseBadge =
              "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
          break;
      case "BSD 2-Clause License":
          licenseBadge =
              "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
          break;
      case "BSD 3-Clause License":
          licenseBadge =
              "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
          break;
      case "CC0 1.0 Universal":
          licenseBadge =
              "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
          break;
      case "Eclipse Public License 2.0":
          licenseBadge =
              "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
          break;
      case "GNU GPL v2":
          licenseBadge =
              "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
          break;
      case "GNU GPL v3":
          licenseBadge =
              "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
          break;
      case "GNU AGPL v3":
          licenseBadge =
              "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
          break;
      case "GNU LGPL v3":
          licenseBadge =
              "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
          break;
      case "MIT License":
          licenseBadge =
              "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          break;
      case "Mozilla Public License 2.0":
          licenseBadge =
              "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
          break;
      case "The Unlicense":
          licenseBadge =
              "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
          break;
  }
  if (data.contribution != "") {
      contribution = data.contribution;
  }

  return `
# ${data.title}
${license}
${licenseBadge}
# Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Testing](#Testing)
* [Notes](#Notes)
# Description
${data.description}
## Installation
\`\`\` 
npm i ${data.installation}
\`\`\`
## Demo 
[${data.usageAlt}]
## Contribution
${contribution}
## Testing
${data.test}
## Notes
If there are any questions or concerns to discuss, please reach out at ${data.email}, or through GitHub @${data.githubUsername}.
`;
}

module.exports = generateMarkdown;