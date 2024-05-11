---
layout: page
title: Kean Data Collection System
description: A system provides departent for collecting data
img: assets/img/keanIPEDS/main-page.jpg
importance: 1
category: web app
related_publications: false
---

## Introduction:
When I worked as a graduate assistant at the department of [Institutional Research](https://www.kean.edu/offices/strategic-analytics-data-illumination-sadi/institutional-research) at Kean Univeristy, I built a full stack system from scratch to address the need for collecting institutional data not currently captured withing existing university systems. Our first-year objective is to build a system for scaling up and focusing on the [IPEDS](https://nces.ed.gov/ipeds/) report.

This system serves as a centralized repository where individual divisions, departments, and programs can input data, facilitating streamlined integration into the IR data warehousing infrastructure.

## System Design:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/keanIPEDS/system design.png" title="ipeds system" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption"> 
    The three-tier web application design: 
    I chose .NET Core for the backend because the production environment utilizes Microsoft IIS, and the database relies on MSSQL. Using a fully integrated Microsoft product stack ensures seamless connectivity. 
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/keanIPEDS/github.png" title="ipeds github" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption"> 
    Due to security concerns, I am unable to share the GitHub repository. However, I have provided a screenshot of the repo. I implemented the MVC (Model-View-Controller) concept and separated the services to ensure that controllers primarily manage traffic routing, while services handle the operational logic.
</div>

## System View:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/keanIPEDS/main-page.jpg" title="kean-main-pages" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The main page dynamically adjusts based on different access levels.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/keanIPEDS/data-entry.png" title="kean data entry" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
The left-side navbar displays the various categories where users need to input data, allowing them to navigate quickly between pages. The system provides warnings if users forget to save their data temporarily.

For each input box, I used React to build a validation function that prevents the entry of invalid data and to guard against injection attacks. Each input box also includes a tooltip that indicates whether the data has passed validation. The validation criteria are based on previous year data and percentage thresholds, which the admin can adjust via the backend configuration.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/keanIPEDS/validation.png" title="kean data validation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

After a user submits their data, a validation page appears, comparing the current year's data with the previous year's. The system requires users to enter a reason to pass the validation. Users can navigate directly to specific entry points by clicking on the errors identified.



## Development cycle:

I served as the sole developer, project manager, and system tester for this project. I diligently documented all aspects of the development process to ensure that future teams could easily understand and build upon my work.

I adopted an agile SDLC approach, dividing the project into several sprints and using [JIRA](https://www.atlassian.com/software/jira) to track my progress. At the end of each sprint, I reported to my supervisor to ensure that the project was on track and to identify areas where the system could be improved.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/keanIPEDS/jira.png" title="kean data entry" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I documented local and production server setting and design document for future usage. And Also I designed test case for future tester could systematically checking the functionality and security.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/keanIPEDS/documentation.png" title="kean data entry" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
