#version 460 core
#include "../../src/demos/27_clustered_shading/pbr-lighting.glh"

uniform DirectionalLight u_directional_light;

void main()
{
    frag_color = vec4(calcDirectionalLight(u_directional_light, normalize(in_normal), in_world_pos), 1.0);
} 