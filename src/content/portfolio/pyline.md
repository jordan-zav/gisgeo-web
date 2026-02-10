---
title: PyLINE — Python-Based Geological Lineament Extraction
summary: Semi-automatic extraction of geological lineaments from multisource geospatial data.
order: 1
status: In Development
period: Nov 2025 – Present
institution: Universidad Nacional de Ingeniería
---

## Overview

**PyLINE** is a Python-based tool designed for the semi-automatic extraction of geological lineaments from multisource raster datasets, including digital elevation models, optical satellite imagery, radiometric data, and geophysical grids.

The project aims to support structural and regional-scale geological interpretation through reproducible, GIS-ready outputs.

## Motivation & Context

Geological lineament mapping is a fundamental task in structural geology, mineral exploration, and geomorphological analysis. However, manual digitization is time-consuming, subjective, and difficult to reproduce.

PyLINE is developed to bridge the gap between fully manual interpretation and fully automatic, black-box extraction approaches.

## Methodology

The workflow integrates several image-processing and spatial-analysis stages:

- Contrast enhancement and normalization
- Multiscale spatial filtering
- Edge detection and morphological operations
- Lineament extraction and vectorization
- Post-processing and structural filtering

All stages are configurable to preserve interpretability and geological control.

## Outputs

- GIS-ready vector lineament datasets
- Attribute-enriched structural information
- Compatibility with fractal, multifractal, and geostatistical analyses

## Current Status

Core extraction routines are implemented and undergoing systematic testing across different geological settings.

## Future Work

- Advanced lineament filtering strategies
- Integration with multifractal analysis modules
- Optional lightweight graphical user interface
