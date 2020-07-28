[![Build Status](https://travis-ci.com/Shot511/RapidGL.svg?token=n4xZiEtrtBgRySDkf6zH&branch=master)](https://travis-ci.com/Shot511/RapidGL)

# RapidGL
Framework for rapid OpenGL demos prototyping.

This framework consists of two major parts:
* **Core library** - which is used as a static library for all examples. Source files are located in ```src/core```.
* **Demos**. Source files are located in ```src/demos```.

## How to build
Simply run the following commands in the root directory:

```
mkdir build
cd build
cmake ..
```

These will create project with your system-default build system which will allow you to build and run the examples.

## How to add a new demo using Template Project

The following instructions are also located in ```src/demos/00_template_project/template_project.h```.

To begin creating a new demo using RapidGL framework follow these steps:

1) Create new directory in ```src/demos/<your_dir_name>```.
2) Add the following line to ```src/demos/CMakeLists.txt```: ```add_subdirectory(<your_dir_name>)```.
3) Copy contents of ```src/demos/00_template_project``` to ```src/demos/<your_dir_name>```.
4) Change target name of your demo in ```src/demos/<your_dir_name>/CMakeLists.txt``` from ```set(DEMO_NAME "00_template_project")``` to ```set(DEMO_NAME "your_demo_name")```.
5) (Re-)Run CMake

**Notes:** After changing class name from e.g. TemplateProject to something else, update ```main.cpp``` in ```<your_dir_name>``` accordingly.

## Examples
All of the demos are available in ```src/demos```.

### Template Project
<img src="screenshots/00_template_project.png" width="50%" height="50%" alt="Template Project" />

### Simple Triangle
<img src="screenshots/01_simple_triangle.png" width="50%" height="50%" alt="Simple Triangle" />

### Simple 3D
This demo shows how to create camera, load models, generate primitives using built-in functions and add textures for specific objects.

<img src="screenshots/02_simple_3d.png" width="50%" height="50%" alt="Simple 3D" />

### Lighting
This demo presents implementation of Blinn-Phong shading model for directional, point and spot lights.

<img src="screenshots/03_lighting.png" width="50%" height="50%" alt="Lighting" />

### Multitextured terrain
This demo presents implementation of multitextured terrain. It uses a blend map (for varying X-Z texturing) and slope based texturing (for texturing the slopes).

<img src="screenshots/04_terrain.png" width="50%" height="50%" alt="Multitextured terrain" />

### Toon shading
This demo presents implementation of various toon shading methods (Simple, Advanced, Simple with Rim, Twin Shade) with different outline rendering methods (Stencil, Post-Process).

<img src="screenshots/05_toon_outline.png" width="50%" height="50%" alt="Toon shading" />

### Simple Fog
Implementation of a simple fog rendering. Three modes are available: linear, exp, exp2.

<img src="screenshots/06_simple_fog.png" width="50%" height="50%" alt="Simple Fog" />

### Alpha Cutout
This demo shows implementation of an alpha cutout using fragments discarding.

<img src="screenshots/07_alpha_cutout.png" width="50%" height="50%" alt="Alpha Cutout" />

### Image based lighting
TODO

### Projected texture
TODO

### Postprocessing filters
TODO: Edge detection and Gaussian blur filters.

### Bloom
TODO

### Geometry Shader: Point Sprites
TODO

### Geometry Shader: Wireframe on top of a shaded model
TODO

### Tessellation
TODO: Curve, 2D quad, 3D surface, depth based tessellation.

### Shadow Mapping
TODO: Shadow Mapping with PCF, random sampling.

### Prebaked ambient occlusion
TODO

### Procedural noise textures
TODO

### Surface animation with vertex displacement
TODO

### Particle Fountain
TODO: Transform Feedback, Instanced particles.

### Fire and Smoke
TODO

### PBR
TODO

### Mesh skinning
TODO: LBS, DQS.

### Environment mapping
TODO: dynamic and static (reflection + refraction).
