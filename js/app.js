let featured = [
    {
        "title": "Accent",
        "description": "simple, reliable, and efficient certificate sender !GO",
        "github": "https://github.com/valutac/accent"
    },{
        "title": "Gitnore",
        "description": "gitignore super power",
        "github": "https://github.com/valutac/gitnore"
    },{
        "title": "Midtrans Bridge",
        "description": "Bridge midtrans callback",
        "github": "https://github.com/valutac/midtrans-bridge"
    },{
        "title": "Vania",
        "description": "Open edX in fun way",
        "github": "https://github.com/valutac/vania"
    },{
        "title": "Snakeye",
        "description": "Python Packaging for Humans",
        "github": "https://github.com/valutac/snakeye"
    }
];

function filterData(data, q) {
    if (q == null || q == "") return data;
    return data.filter((v) => {
        return v.title.toLowerCase().includes(q.toLowerCase());
    });
}

new Vue({
    el: '#app',
    data: {
        featured: featured,
        keyword: "",
    },
    methods: {
        search(event) {
            this.featured = filterData(featured, this.keyword);
        }
    }
})