const mainStartTemplate = `
    <div class="main__field">
    <div class="field__question">
        <img src="/pictures/imagesMain/chess.jpg" width="450px" height="190px">
        <p id="question"></p>
    </div>
    <div class="field__value">
        <div class="pair__values">
            <a href="/mainStartNextFaulse" class="button__value value1 option" type="submit"></a>
            <a href="/mainStartNextFaulse" class="button__value value2 option" type="submit"></a>
        </div>
        <div class="pair__values">
            <a href="/mainStartNextTrue" class="button__value value3 option" type="submit"></a>
            <a href="/mainStartNextTrue" class="button__value value4 option" type="submit"></a>
        </div>
    </div>
    </div>
    `;

export default mainStartTemplate;
