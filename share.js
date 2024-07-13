const Share = {
    facebook: function(purl, ptitle, pimg, text) {
        let url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&quote=' + encodeURIComponent(text); // Populate the pre-made post
        url += '&p[url]=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    twitter: function(purl, ptitle, text) {
        let url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(text); // Populate the pre-made post
        url += '&url=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    email: function(subject, body) {
        const url = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        Share.popup(url);
    },
    popup: function(url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }
};
document.getElementById('facebookShare').addEventListener('click', function() {
    const preMadePost = 'Check out this amazing website!'; // Pre-made post content
    const shareUrl = Share.facebook('URL', 'TITLE', 'IMG_PATH', preMadePost); // Call the Share.facebook method
    Share.popup(shareUrl); // Trigger the sharing process by opening the constructed URL in a new window
});

