// MOBILE
const burger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');

burger.onclick = () => menu.classList.toggle('is-open');

document.querySelectorAll('.mobile-menu a').forEach(el => {
    el.onclick = () => menu.classList.remove('is-open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) menu.classList.remove('is-open');
});

// CONTACT FORM - Formspree
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

if (form) {
    form.onsubmit = async (e) => {
        e.preventDefault();
        
        // Kumpulkan data form
        const formData = new FormData(form);
        const data = {
            nama: formData.get('nama'),
            email: formData.get('email'),
            pesan: formData.get('pesan')
        };

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                msg.classList.add('show');
                msg.innerHTML = 'Pesan Anda telah diterima. Tim kami akan menghubungi Anda.';
                msg.style.color = '#2F5D50';
                form.reset();
                
                // Sembunyikan pesan setelah 5 detik
                setTimeout(() => {
                    msg.classList.remove('show');
                }, 5000);
            } else {
                msg.classList.add('show');
                msg.innerHTML = 'Terjadi kesalahan. Silakan coba lagi nanti.';
                msg.style.color = '#d32f2f';
            }
        } catch (error) {
            msg.classList.add('show');
            msg.innerHTML = 'Terjadi kesalahan koneksi. Silakan periksa koneksi internet Anda.';
            msg.style.color = '#d32f2f';
        }
    };
}

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
            el.classList.add('active');
        }
    });
};

window.onscroll = revealOnScroll;
revealOnScroll();