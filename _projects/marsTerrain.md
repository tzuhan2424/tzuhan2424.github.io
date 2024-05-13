---
layout: page
title: Mars Terrain segmentation
description: Mars Terrain Type Segmentation with Novel Edge Detection
img: assets/img/Mars/mars-main.png
importance: 2
category: deep learning
related_publications: false
---
## Introduction
Utilizing deep learning techniques for Mars exploration can help ensure safer landing areas as well as avoid
potentially dangerous areas for rover exploration [1]. In this
research, we use Fully Convolution Networks [2] (FCN) to
perform semantic segmentation. In addition, inspired by the
DeepLabV3+ model [3] which uses an encoder-decoder structure
to obtain a sharp object boundary, we add an additional edge
channel to obtain the object boundary. Our result shows that
adding an edge channel in the training phase could increase the
recall rate of bedrock terrain types.

## Slides
<iframe src="/assets/img/Mars/mars-slides.pdf" width="100%" height="600px">
    This browser does not support PDFs. Please download the PDF to view it.
</iframe>

## Final Report

<iframe src="/assets/img/Mars/mars-final.pdf" width="100%" height="800px">
    This browser does not support PDFs. Please download the PDF to view it.
</iframe>