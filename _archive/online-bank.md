---
layout: page
title: Online banking system
description: A mimic banking system allows user perform transaction online
img: assets/img/onlineBanking/mainFunction.png
importance: 3
category: web app
related_publications: false
---

demo: (https://obi.kean.edu/~lintzuh@kean.edu/CPS3740/)  
[github link](https://github.com/tzuhan2424/CPS3740_Project)

## Introduction
The mimic system offers web interface for managing database transactions. Key features include:
<ui> 
    <li>Login: only authorized users can access their accounts.
    </li>
    <li>Transactions: Perform transactions such as deposite and withdraw from the mimic account.
    </li>
    <li>Transaction Updates: modify existing entries.
    </li>
    <li>Transaction Search: Easily search and review past transactions.
    </li>
</ui>

## What I learned from this project
This project marked my first venture into web application development, employing a three-tier architecture. I utilized PHP for the backend logic due to its seamless integration with HTML, which facilitates rapid development, especially for smaller web applications. For data storage, I chose MySQL, a relational database system, enhancing the robustness and scalability of the application. This experience has been pivotal in understanding the dynamics of web technologies and database management.
## System Design

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/onlineBanking/system.png" title="online-banking-system" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## System View
### 1. Main function
<span style="color:blue;">
the main function displays user information and history.</span>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/onlineBanking/mainFunction.png" title="mainFunction" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


### 2. Add transaction and Search
<div style="color:blue;">
User could use different html input tag to input the transaction
</div>
<div style="color:blue;">
using pattern match to implement the search function
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/onlineBanking/addTransaction.png" title="addTransaction" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/onlineBanking/search.png" title="search" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


### 3. Update transaction

<span style="color:blue;">
User could update notes and delete record.
</span>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/onlineBanking/update.png" title="update" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Technology and Tools
html, php, mysql, linux

