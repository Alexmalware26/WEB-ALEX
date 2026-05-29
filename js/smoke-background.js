/**
 * Smoke Background — fondo WebGL animado de humo
 * Adaptado del componente React spooky-smoke-animation a vanilla JS
 */

(() => {
    const canvas = document.getElementById('smoke-bg');
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) {
        console.warn('WebGL2 no soportado, ocultando fondo de humo');
        canvas.style.display = 'none';
        return;
    }

    const vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){ gl_Position = position; }`;

    const fragmentSrc = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){ p=fract(p*vec2(12.9898,78.233)); p+=dot(p,p+34.56); return fract(p.x*p.y); }
float noise(vec2 p){ vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f); return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y); }
float fbm(vec2 p){ float t=.0,a=1.; for(int i=0;i<5;i++){ t+=a*noise(p); p*=mat2(1,-1.2,.2,1.2)*2.; a*=.5; } return t; }

void main(){
  vec2 uv = (FC/R - 0.5) * vec2(R.x/R.y, 1.0) * 2.0;
  vec3 col=vec3(1);

  float n=fbm(uv*.6-vec2(T*.015,T*.005));
  n=noise(uv*2.5+n*2.);

  col.r-=fbm(uv*1.4+vec2(T*.005,T*.02)+n);
  col.g-=fbm(uv*1.405+vec2(T*.005,T*.02)+n+.004);
  col.b-=fbm(uv*1.41+vec2(T*.005,T*.02)+n+.008);

  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));
  col=mix(vec3(.05),col,min(time*.1,1.));
  col=clamp(col,.05,1.);
  O=vec4(col,1);
}`;

    const hexToRgb = (hex) => {
        const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return m ? [
            parseInt(m[1], 16) / 255,
            parseInt(m[2], 16) / 255,
            parseInt(m[3], 16) / 255
        ] : [0.5, 0.5, 0.5];
    };

    const getColor = () => {
        return document.documentElement.classList.contains('light')
            ? hexToRgb('#e11d48')
            : hexToRgb('#e11d48');
    };

    const compile = (shader, source) => {
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader error:', gl.getShaderInfoLog(shader));
        }
    };

    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    compile(vs, vertexSrc);
    compile(fs, fragmentSrc);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, 'resolution');
    const uTime = gl.getUniformLocation(program, 'time');
    const uColor = gl.getUniformLocation(program, 'u_color');

    let color = getColor();

    const resize = () => {
        const w = canvas.clientWidth || window.innerWidth;
        const h = canvas.clientHeight || window.innerHeight;
        canvas.width = Math.floor(w * 0.75);
        canvas.height = Math.floor(h * 0.75);
        gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    requestAnimationFrame(resize);
    setTimeout(resize, 100);
    window.addEventListener('resize', resize);
    window.addEventListener('load', resize);
    window.addEventListener('themechange', () => { color = getColor(); });

    let lastFrame = 0;
    const targetInterval = 1000 / 30;
    const render = (now) => {
        requestAnimationFrame(render);
        if (now - lastFrame < targetInterval) return;
        lastFrame = now;
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, now * 1e-3);
        gl.uniform3fv(uColor, color);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    render(0);
})();
