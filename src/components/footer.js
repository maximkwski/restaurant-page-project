import gitIcon from '../assets/github-logo.png';

export default function footer() {
    const footerDiv = document.getElementById('footer');

      const footerContainer = document.createElement('div');
      footerContainer.classList.add('footer-container');
      const footer_p1 = document.createElement('p');
      footer_p1.innerHTML = "&copy; 2023 Lingr. All rights reserved.";
  
      const footer_myDiv = document.createElement('div');
      footer_myDiv.classList.add('my-info');
      const footerIcon = new Image();
      footerIcon.src = gitIcon; 
      footer_myDiv.innerHTML = "built & designed by";
      footer_myDiv.appendChild(footerIcon);
      const gitLink = document.createElement('a');
      gitLink.innerHTML = 'maximkwski';
      gitLink.target = "_blank";
      gitLink.rel="noopener noreferrer";
      gitLink.href = "https://github.com/maximkwski";
      footer_myDiv.appendChild(gitLink);
      
      footerContainer.appendChild(footer_p1);
      footerContainer.appendChild(footer_myDiv);
      footerDiv.appendChild(footerContainer);

    return footerDiv;
}