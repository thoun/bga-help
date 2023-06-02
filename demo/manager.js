let helpManager;

const BGA_HELP_FOLDED_HELP = 'BgaHelp-FoldedHelp';

const game = {};

class PopinDialog {
    title = '';
    content = '';
    create() {}

    setTitle(title) {
        this.title = title;
    }
    setContent(content) {
        this.content = content;
    }
    
    show() {
        alert(`This should display a standard BGA popin with the title and content.\n
        It is here a simple alert, to not include all BGA framework to the demo.\n\n
        ${this.title}\n\n
        ${this.content}`);
    }
}

window.ebg = {
    popindialog: PopinDialog,
};

function initManager() {
    helpManager = new HelpManager(game, {
        buttons: [
            new BgaHelpPopinButton({
                title: _("Card help"),
                html: `
                    <h1>Main section</h1>
                    <div>The HTML content of the popin</div>
                `,
                /*buttonBackground: '#5890a9',
                buttonColor: 'black',*/
            }),
            new BgaHelpExpandableButton({
                unfoldedHtml: `The expanded content of the button`,
                foldedContentExtraClasses: 'color-help-folded-content',
                unfoldedContentExtraClasses: 'color-help-unfolded-content',
                expandedWidth: '120px',
                expandedHeight: '210px',
                defaultFolded: false,
                localStorageFoldedKey: BGA_HELP_FOLDED_HELP,
            }),
        ]
    });
}
