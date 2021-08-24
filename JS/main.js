const app = Vue.createApp({
    data: () => ({
        title: "Gradient Generator",
        fcolor: "#000000",
        scolor: "#ffffff",
        orientation: "1",
    }),
    computed: {
        setColor() {
            switch (this.orientation) {
                case '1':
                    return `background: linear-gradient(to right, ${this.fcolor}, ${this.scolor});`;
                    break;
                case '2':
                    return `background: linear-gradient(to left, ${this.fcolor}, ${this.scolor});`;
                    break;
                case '3':
                    return `background: linear-gradient(to top, ${this.fcolor}, ${this.scolor});`;
                    break;
                case '4':
                    return `background: linear-gradient(to bottom, ${this.fcolor}, ${this.scolor});`;    
                    break;
            }
        },
    },
});