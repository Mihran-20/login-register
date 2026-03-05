const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const socialIcons = document.querySelectorAll('.social-icons a');
const passwordInputs = document.querySelectorAll('input[type="password"]');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

socialIcons.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = link;
        const { offsetX: x, offsetY: y } = e;
        const xRotation = -25 * ((y - height / 2) / (height / 2));
        const yRotation = 25 * ((x - width / 2) / (width / 2));
        link.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.1, 1.1, 1.1)`;
        link.style.setProperty('--x', `${(x / width) * 100}%`);
        link.style.setProperty('--y', `${(y / height) * 100}%`);
        const icon = link.querySelector('i');
        icon.style.transform = `translateZ(20px)`; 
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        const icon = link.querySelector('i');
        icon.style.transform = `translateZ(0px)`;
    });
});

passwordInputs.forEach(input => {
    const icon = input.parentElement.querySelector('i.bxs-lock-alt');
    if (icon) {
        icon.addEventListener('click', () => {
            icon.classList.add('shake-animation');
            setTimeout(() => icon.classList.remove('shake-animation'), 300);
            if (input.type === 'password') {
                input.type = 'text'; 
                icon.classList.replace('bxs-lock-alt', 'bxs-lock-open-alt'); 
                icon.style.color = '#7494ec'; 
            } else {
                input.type = 'password'; 
                icon.classList.replace('bxs-lock-open-alt', 'bxs-lock-alt'); 
                icon.style.color = '#888'; 
            }
        });
    }
});