<div align="center">
  <h1>Repte-2_Replica-App-Just-Eat</h1>
  <a href="#"><img src="https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white" alt="HTML Badge"/></a>
  <a href="#"><img src="https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff" alt="CSS Badge"/></a>
  <a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript Badge"/></a>
</div>

<br>

## Objectiu del repte
Aquest repte consisteix en clonar una part de l'app **Just Eat**, centrant-nos en la fidelitat al detall. El projecte inclou la creació i modificació d'icones i la replicació del disseny de la interfície d'usuari, optimitzada tant per a dispositius mòbils com per a web.

- **Clonació precisa**: Fer una rèplica de l'aplicació Just Eat, posant especial atenció al disseny i l'experiència d'usuari.
- **Creació d'icones personalitzades**: Generar icones personalitzades utilitzant un procés específic de captura i conversió d'imatges.

## Pasos per a la creació d'icones

Per crear les icones que necessitem per a la rèplica, seguirem aquests passos:

1. **Captura de pantalla**: Realitza captures de pantalla de les icones utilitzades a l'app Just Eat.
2. **Guardar en format `.png`**: Guarda les captures d'icones en format `.png`.
3. **Editar les imatges**: Modifica les imatges `.png` per deixar el fons transparent, assegurant una neteja visual.
4. **Conversió a `.svg`**: Utilitza un conversor d'arxius per passar les imatges de `.png` a `.svg`.
5. **Crear les icones amb IcoMoon**:
   - Importa els arxius `.svg` a [IcoMoon.io](https://icomoon.io) per generar un conjunt d'icones que podràs utilitzar al projecte.
   - Crea el paquet d'icones que necessitis per implementar-les fàcilment al teu projecte.

<br>

## Instal·lació i Execució d'un Repositori en Cordova

1. **Creació d'un APK**
   - Crea un nou projecte:
     ```bash
     cordova create myApp
     ```
   - Accedeix a la carpeta del projecte:
     ```bash
     cd myApp
     ```

   1.1. Tenir en compte l'arxiu original de l'`index.html` (incloent `cordova.js` i les etiquetes `meta`).

   1.2. Canvi en l'arxiu `config.xml`: modifica la etiqueta `<name>` i l'`id` de l'aplicació.

   1.3. Descarrega una imatge d'icona i ves al recurs web Abiro.

   1.4. Guarda la carpeta `res` a l'arrel del projecte `myApp`.

   1.5. Afegeix el codi XML generat a la web Abiro al nostre `config.xml`.

   <br>

2. **Afegir la plataforma Android**
   ```bash
   cordova platforms add android
   ```

   <br>

3. **Construir i executar l'aplicació**

   3.1. Per construir l'aplicació:
   ```bash
   cordova build android
   ```

   3.2. Per executar l'aplicació en un dispositiu:
   ```bash
   cordova run android
   ```
   
   3.3. Canvia l'icona i el splash screen si cal.

   3.4. Canvia l'ID de l'aplicació.

<br>

4. Debuggar l'APK
Utilitza eines de debugging com Chrome DevTools per a depurar l'aplicació si és necessari.

<br>

## Nota
Aquest projecte ha estat creat amb fins educatius i de pràctica. No està afiliat ni té cap relació oficial amb Just Eat.
