import "./libraries/bootstrap.js";
import "./libraries/jquery.js";


const log = console.log;


const controller = new Controller();
function Controller(settings = {}) {

    const iconBuilder = new IconBuilder();

    const icons = [
        {
            label: "Happy Timer",
            icon: "./images/timer_icon.png",
            url: "https://miyaichi-learning.com/timer",
            type: "utility",
        },
        {
            label: "Suuudoku",
            icon: "./images/sudoku_icon.png",
            url: "https://miyaichi-learning.com/sudoku",
            type: "game",
        },
        {
            label: "Blocksy",
            icon: "./images/blocksy_icon.png",
            url: "https://miyaichi-learning.com/blocksy",
            type: "game",
        },
        {
            label: "Mastermind",
            icon: "./images/mastermind_icon.png",
            url: "https://miyaichi-learning.com/mastermind",
            type: "game",
        },
        {
            label: "Minesweeper",
            icon: "./images/minesweeper_icon.png",
            url: "https://miyaichi-learning.com/minesweeper",
            type: "game",
        },
        {
            label: "Password Builder",
            icon: "./images/password_builder_icon.png",
            url: "https://miyaichi-learning.com/password",
            type: "utility",
        },
        {
            label: "QR Code Builder",
            icon: "./images/qrbuilder_icon.png",
            url: "https://miyaichi-learning.com/qr-code",
            type: "utility",
        },
        {
            label: "Random Number",
            icon: "./images/ransuu_icon.png",
            url: "https://miyaichi-learning.com/ransuu",
            type: "utility",
        },
        {
            label: "SixAcross",
            icon: "./images/sixacross_icon.png",
            url: "https://miyaichi-learning.com/sixacross",
            type: "game",
        },
        {
            label: "Suuuudoku",
            icon: "./images/sudoku_icon.png",
            url: "https://miyaichi-learning.com/sudoku",
            type: "game",
        },
        {
            label: "Woodle",
            icon: "./images/woodle_icon.png",
            url: "https://miyaichi-learning.com/woodle",
            type: "game",
        },
    ];

    icons.forEach((data, n) => setTimeout(() => iconBuilder.makeNew(data), n * 100));
}

function IconBuilder(settings = {}) {
    const $iconsHolder = $("#icons-holder");
    const $template = $(".app-icon.my-template").removeClass("my-template").detach();

    this.makeNew = appData => {
        const $clone = $template.clone();
        $clone.find(".icon-label").text(appData.label);
        $clone.find(".app-image").attr("src", appData.icon);
        $clone.attr("href", appData.url);
        $clone.appendTo($iconsHolder);
    };
}