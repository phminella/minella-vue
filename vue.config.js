module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
            @import "@/assets/scss/_mixins.scss";
            @import "@/assets/scss/_utilities.scss";
            @import "@/assets/scss/_variables.scss";
          `
            }
        }
    }
};