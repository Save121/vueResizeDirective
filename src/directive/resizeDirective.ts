

export const resizeDirective = {
    beforeMount: (_, biding) => {
      const onResizeCallback = biding.value;
      window.addEventListener("resize", () => {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        onResizeCallback({ width, height });
      });
    },
  }k