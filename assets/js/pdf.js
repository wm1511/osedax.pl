import { GlobalWorkerOptions } from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.min.mjs';

GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs';

let currentPage = 1;
let pdfDoc = null;
let totalPages = 0;
let scale = 1.0;
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function getSelectedPdf() {
    const checkedRadio = document.querySelector('input[name="vbtn-radio"]:checked');

    if (checkedRadio) {
        return checkedRadio.getAttribute('pdf');
    }
    
    return null;
}

async function renderPDF(url) {
    try {
        const pdf = await pdfjsLib.getDocument(url).promise;
        pdfDoc = pdf;
        totalPages = pdf.numPages;

        document.getElementById('page_count').textContent = totalPages;

        renderPage(currentPage);
    } catch (err) {
        console.error('Error rendering PDF:', err);
    }
}

async function renderPage(pageNum) {
    if (!pdfDoc) return;

    try {
        const page = await pdfDoc.getPage(pageNum);

        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
            canvasContext: context,
            viewport: viewport,
        };
        await page.render(renderContext).promise;

        document.getElementById('page_num').textContent = currentPage;
    } catch (err) {
        console.error('Error rendering page:', err);
    }
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
    }
});

document.querySelectorAll('input[name="vbtn-radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const pdfUrl = getSelectedPdf();
        if (pdfUrl) {
            currentPage = 1;
            renderPDF(pdfUrl);
        }
    });
});

window.onload = function () {
    const pdfUrl = getSelectedPdf();
    if (pdfUrl) {
        renderPDF(pdfUrl);
    }
};