import handler from "./handler";

const certificate = () => {
    const items = document.querySelectorAll('.certificate-document');
    const modalCertificate = document.querySelectorAll('.modal-certificate__container');

    for (const item of items) {
        handler(item, 'click', function(e) {
            e.preventDefault();

            modalCertificate.forEach(elem => {
                elem.innerHTML  = `
               <img src="${this.href}" alt/>
            `;
                elem.classList.remove('hide');
            });

        });
    }
};

export default certificate;
