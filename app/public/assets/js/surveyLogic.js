class Friend {
    constructor(name, photoUrl, scores) {
        this.name = name,
            this.photo = photoUrl,
            this.scores = [scores]
    }
};

function getInput() {
    const name = $('#name').val().trim();
    const photoUrl = $('#photo').val().trim();
    const scores = [
        $("input[name='question1']:checked").val() || 0,
        $("input[name='question2']:checked").val() || 0,
        $("input[name='question3']:checked").val() || 0,
        $("input[name='question4']:checked").val() || 0,
        $("input[name='question5']:checked").val() || 0,
        $("input[name='question6']:checked").val() || 0,
        $("input[name='question7']:checked").val() || 0,
        $("input[name='question8']:checked").val() || 0,
        $("input[name='question9']:checked").val() || 0,
        $("input[name='question10']:checked").val() || 0,
    ];
    let user = new Friend(name, photoUrl, scores);
    $.post('/api/friends', user, () => {
    });
};
$('#matchBtn').on("click", getInput);