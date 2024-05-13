---
layout: page
title: Breast Ultrasound Image Segmentation
description: Weakly Supervised Breast Ultrasound Image Segmentation Based on Image Selection
img: assets/img/BUS/main.png
importance: 1
category: deep learning
related_publications: false
---

Accepted by the 46th Annual International Conference of the IEEE Engineering in Medicine and Biology Society,2024. [EMBC](https://embc.embs.org/2024/)
[Link to PDF](/assets/img/BUS/Weakly_Supervised_Breast_Ultrasound_Image_Segmentation_Based_on_Image_Selection.pdf)

## Abstract
Automatic segmentation in Breast Ultrasound (BUS)
imaging is vital to BUS computer-aided diagnostic systems. Fully
supervised learning approaches can attain high accuracy, yet they
depend on pixel-level annotations that are challenging to obtain.
As an alternative, weakly supervised learning methods offer a
way to lessen the dependency on extensive annotation requirements. Existing weakly supervised learning methods are typically
trained on the entire dataset, but not all samples are effective in
training a robust image segmentation model. To overcome this
challenge, we have developed a new weakly supervised learning
approach for BUS image segmentation. Our framework includes
three key contributions: 1. A novel image selection method
using Class Activation Maps is proposed to identify high-quality
candidates for generating pseudo-segmentation labels; 2. The
‘Segment Anything’ is utilized for pseudo-label generation; 3.
A segmentation model is trained using a Mean Teacher method,
incorporating both pseudo-labeled and non-labeled images. The
proposed framework is evaluated on a public BUS image dataset
and achieves an Intersection over Union score that is 82.9% of
what is attained by fully supervised methods.


## Conference Paper
<iframe src="/assets/img/BUS/Weakly_Supervised_Breast_Ultrasound_Image_Segmentation_Based_on_Image_Selection.pdf" width="100%" height="1000px">
    This browser does not support PDFs. Please download the PDF to view it.
</iframe>


## Kean research day poster
<iframe src="/assets/img/BUS/2024BUS.pdf" width="100%" height="600px">
    This browser does not support PDFs. Please download the PDF to view it.
</iframe>
