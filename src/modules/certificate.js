import handler from "./handler";

const certificate = () => {
    const items = document.querySelectorAll('.certificate-document');
    const modalCertificate = document.querySelectorAll('.modal-certificate');

    for (const item of items) {
        handler(item, 'click', function(e) {
            e.preventDefault();

            modalCertificate.forEach(elem => {
                elem.innerHTML  = `
                <div class="modal-certificate__container">
                    <img src="${this.href}" alt/>
                </div>
            `;
                elem.classList.add('active');
            });

        });
    }
};

export default certificate;
