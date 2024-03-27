
  function openPopups() {
    for (var i = 0; i < 100; i++) {
        window.open('about:blank', 'popup' + i, 'width=200,height=200');
    }
}