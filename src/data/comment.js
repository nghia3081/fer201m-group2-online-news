let comments = [
    {
        id: 1,
        content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "23 November 2021",
        username: "amyrobson",
        replies: []
    },
    {
        id: 2,
        content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "5 December 2021",
        username: "maxblagun",
        replies: [
            {
                id: 3,
                content: "@maxblaugn, If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                createdAt: "18 December 2021",
                username: "ramsesmiron",
            },
            {
                id: 4,
                content: "@ramsesmiron, I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                createdAt: "30 December 2021",
                username: "juliusomo",
            }
        ]
    }
]

export default comments