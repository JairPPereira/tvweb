function interpolate (palette) {
    function lerp(v0, v1, t) {
      return v0*(1-t)+v1*t;
    }
  
    function clamp(a, min, max){
      return max > min ? Math.max(Math.min(a,max),min) : Math.max(Math.min(a,min),max);
    }
  
    function hexToArr (string) {
      var [,r,g,b] = /#([A-z0-9]{2})([A-z0-9]{2})([A-z0-9]{2})/.exec(string);
      var arr = [r,g,b];
      arr = arr.map(function(hex) {
        return parseInt(hex, 16);
      });
      arr.push(1);
      return arr;
    }
  
    palette = palette.map(hexToArr);
  
  
    return (t, mix = lerp) => {
      t = clamp(t, 0, 1);
      let idx = ( palette.length - 1 ) * t,
          lIdx = Math.floor( idx ),
          rIdx = Math.ceil( idx );
      t = idx - lIdx;
      let lColor = palette[lIdx], rColor = palette[rIdx];
      let result = lColor.map((v, i) => {
        v = mix(v, rColor[i], t);
        if (i < 3) v = Math.round(v);
        return v;
      });
      if (result[3] === 1) {
        return `rgb(${result.slice(0,3)})`;
      }
      return `rgba(${result})`;
    };
  }