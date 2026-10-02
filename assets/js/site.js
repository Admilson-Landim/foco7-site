/* Foco7 — site público: idioma (5, como a app), tema escuro/claro, Início da app em miniatura,
   lista dos exercícios (textos de app-texts.js, exportados da app) e 3 mini-jogos. */
(function () {
  'use strict';

  var LANGS = [
    { code: 'pt-PT', flag: '🇵🇹', short: 'PT', name: 'Português (Portugal)', anchor: 'pt-pt' },
    { code: 'pt-BR', flag: '🇧🇷', short: 'BR', name: 'Português (Brasil)', anchor: 'pt-br' },
    { code: 'en-US', flag: '🇺🇸', short: 'EN', name: 'English (US)', anchor: 'en' },
    { code: 'fr-FR', flag: '🇫🇷', short: 'FR', name: 'Français', anchor: 'fr' },
    { code: 'es-ES', flag: '🇪🇸', short: 'ES', name: 'Español (España)', anchor: 'es' },
  ];
  var ORDER = ['schulte', 'stroop', 'digits', 'differences', 'subitizing', 'mirror', 'blind-writing'];
  var META = {
    schulte: { icon: 'grid-outline', accent: 'blue' },
    stroop: { icon: 'color-palette-outline', accent: 'red' },
    digits: { icon: 'swap-horizontal-outline', accent: 'purple' },
    differences: { icon: 'search-outline', accent: 'green' },
    subitizing: { icon: 'apps-outline', accent: 'orange' },
    mirror: { icon: 'repeat-outline', accent: 'cyan' },
    'blind-writing': { icon: 'eye-off-outline', accent: 'yellow' },
  };

  /* ---------- Textos do site (os dos exercícios vêm da app: window.APP_TEXTS) ---------- */
  var S = {
    'pt-PT': {
      'privacy.title': 'Política de privacidade',
      'privacy.updated': 'Última atualização: {d} · Aplica-se à app Foco7 ({id}) para Android e iOS.',
      'meta.title': 'Foco7 — Treino cerebral em 7 exercícios',
      'a11y.skip': 'Saltar para o conteúdo',
      'nav.exercises': 'Exercícios', 'nav.how': 'Como funciona', 'nav.privacy': 'Privacidade',
      'footer.rights': 'Todos os direitos reservados.',
      'theme.toLight': 'Mudar para o tema claro', 'theme.toDark': 'Mudar para o tema escuro',
      'lang.label': 'Idioma',
      'hero.eyebrow': 'Treino cerebral · Android',
      'hero.title': 'Treina a atenção em 7 exercícios curtos.',
      'hero.lead': 'Alguns minutos por dia para treinar o foco, a perceção e a memória de trabalho. Sem anúncios, sem conta, e os teus resultados ficam só no teu telemóvel.',
      'badge.ads': 'Sem anúncios', 'badge.account': 'Sem conta', 'badge.offline': 'Funciona sem internet', 'badge.langs': '5 idiomas',
      'cta.get': 'Obter o Foco7', 'cta.see': 'Ver os exercícios',
      'ex.title': 'Os 7 exercícios',
      'ex.lead': 'Cada exercício dura poucos minutos e tem 3 níveis: Fácil, Médio e Difícil. Os textos e as regras são os mesmos da app.',
      'ex.how': 'Como jogar',
      'demo.title': 'Experimenta aqui',
      'demo.lead': 'Três exercícios em versão mini, no navegador. Na app são maiores, com níveis, tempo e recordes.',
      'demo.schulte': 'Toca nos números de 1 a 9, por ordem, o mais depressa que conseguires.',
      'demo.stroop': 'Toca na COR DA TINTA, não na palavra escrita.',
      'demo.mirror': 'Lê a frase ao espelho e escolhe a certa.',
      'demo.again': 'Outra vez',
      'demo.next': 'Próximo: {n}', 'demo.done': '✓ Feito!', 'demo.score': 'Acertos: {a} · Erros: {b}',
      'demo.colors': { red: 'Vermelho', blue: 'Azul', green: 'Verde', yellow: 'Amarelo' },
      'how.title': 'Como funciona',
      'how.s1t': 'Escolhe o nível', 'how.s1': 'Fácil, Médio ou Difícil. A Intro de cada exercício explica as regras antes de começar.',
      'how.s2t': 'Joga', 'how.s2': 'Contagem 3-2-1 e começa. Se saíres da app ou parares 2 minutos, o jogo fica em pausa e o tempo não conta.',
      'how.s3t': 'Vê o resultado', 'how.s3': 'Pontuação, tempo, erros e a comparação com o teu melhor. "Novo recorde!" quando te superas.',
      'training.title': 'Treino de hoje',
      'training.text': 'Os 7 exercícios seguidos, no teu nível. Se saíres a meio, retomas onde paraste. No fim vês o resumo, a comparação com o treino anterior e a tua sequência de dias.',
      'progress.title': 'Progresso',
      'progress.text': 'Calendário com os dias de treino, sequência atual e a maior, o melhor resultado por nível e um gráfico por exercício. Quando estiveres pronto, a app sugere o nível seguinte.',
      'feat.title': 'Pensado para ti',
      'feat.privacyT': 'Privado', 'feat.privacy': 'Sem conta nem servidores: os resultados nunca saem do telemóvel.',
      'feat.offlineT': 'Sem internet', 'feat.offline': 'Tudo funciona em modo avião.',
      'feat.langsT': '5 idiomas', 'feat.langs': 'Português (Portugal e Brasil), English, Français e Español, com frases e palavras próprias de cada idioma.',
      'feat.themeT': 'Escuro ou claro', 'feat.theme': 'Muda com um toque, como neste site.',
      'feat.a11yT': 'Fácil de ler', 'feat.a11y': 'Letra grande, bom contraste e certo/errado com ✓ e ✗, não só pela cor.',
      'feat.voiceT': 'Voz', 'feat.voice': 'Os Números ao Contrário podem ser ditos em voz alta, no teu idioma.',
      'dl.title': 'Obter o Foco7', 'dl.lead': 'Gratuito, para Android 7 ou mais recente.',
      'dl.play': 'Em breve. A app está em fase de testes.', 'dl.soon': 'Em breve',
      'dl.apkT': 'APK direto', 'dl.apk': 'O ficheiro de instalação nas Releases do GitHub, assinado pelo autor.', 'dl.apkBtn': 'Ver versões',
      'dl.otherT': 'Outras lojas', 'dl.other': 'Huawei AppGallery, Samsung Galaxy Store, APKPure, Uptodown e Aptoide: em breve.',
      'dl.iphone': 'Ainda não há versão para iPhone.',
      'phone.subtitle': '7 exercícios seguidos',
      mirror: [
        ['O gato dorme ao sol', 'O gato dorme ao sal', 'O gato corre ao sol', 'O sol dorme ao gato'],
        ['A chuva molha a rua', 'A chuva molha a lua', 'A rua molha a chuva', 'A chave molha a rua'],
        ['Bebo café com leite', 'Bebo café com lente', 'Bebo leite com café', 'Bebo chá com leite'],
      ],
    },
    'pt-BR': {
      'privacy.title': 'Política de privacidade',
      'privacy.updated': 'Última atualização: {d} · Vale para o app Foco7 ({id}) para Android e iOS.',
      'meta.title': 'Foco7 — Treino cerebral em 7 exercícios',
      'a11y.skip': 'Pular para o conteúdo',
      'nav.exercises': 'Exercícios', 'nav.how': 'Como funciona', 'nav.privacy': 'Privacidade',
      'footer.rights': 'Todos os direitos reservados.',
      'theme.toLight': 'Mudar para o tema claro', 'theme.toDark': 'Mudar para o tema escuro',
      'lang.label': 'Idioma',
      'hero.eyebrow': 'Treino cerebral · Android',
      'hero.title': 'Treine a atenção com 7 exercícios curtos.',
      'hero.lead': 'Alguns minutos por dia para treinar o foco, a percepção e a memória de trabalho. Sem anúncios, sem conta, e seus resultados ficam só no seu celular.',
      'badge.ads': 'Sem anúncios', 'badge.account': 'Sem conta', 'badge.offline': 'Funciona sem internet', 'badge.langs': '5 idiomas',
      'cta.get': 'Baixar o Foco7', 'cta.see': 'Ver os exercícios',
      'ex.title': 'Os 7 exercícios',
      'ex.lead': 'Cada exercício dura poucos minutos e tem 3 níveis: Fácil, Médio e Difícil. Os textos e as regras são os mesmos do app.',
      'ex.how': 'Como jogar',
      'demo.title': 'Experimente aqui',
      'demo.lead': 'Três exercícios em versão mini, no navegador. No app eles são maiores, com níveis, tempo e recordes.',
      'demo.schulte': 'Toque nos números de 1 a 9, em ordem, o mais rápido que conseguir.',
      'demo.stroop': 'Toque na COR DA TINTA, não na palavra escrita.',
      'demo.mirror': 'Leia a frase no espelho e escolha a certa.',
      'demo.again': 'De novo',
      'demo.next': 'Próximo: {n}', 'demo.done': '✓ Pronto!', 'demo.score': 'Acertos: {a} · Erros: {b}',
      'demo.colors': { red: 'Vermelho', blue: 'Azul', green: 'Verde', yellow: 'Amarelo' },
      'how.title': 'Como funciona',
      'how.s1t': 'Escolha o nível', 'how.s1': 'Fácil, Médio ou Difícil. A introdução de cada exercício explica as regras antes de começar.',
      'how.s2t': 'Jogue', 'how.s2': 'Contagem 3-2-1 e começa. Se você sair do app ou parar por 2 minutos, o jogo pausa e o tempo não conta.',
      'how.s3t': 'Veja o resultado', 'how.s3': 'Pontuação, tempo, erros e a comparação com o seu melhor. "Novo recorde!" quando você se supera.',
      'training.title': 'Treino de hoje',
      'training.text': 'Os 7 exercícios em sequência, no seu nível. Se sair no meio, continua de onde parou. No fim você vê o resumo, a comparação com o treino anterior e sua sequência de dias.',
      'progress.title': 'Progresso',
      'progress.text': 'Calendário com os dias de treino, sequência atual e a maior, o melhor resultado por nível e um gráfico por exercício. Quando você estiver pronto, o app sugere o próximo nível.',
      'feat.title': 'Pensado para você',
      'feat.privacyT': 'Privado', 'feat.privacy': 'Sem conta nem servidores: os resultados nunca saem do celular.',
      'feat.offlineT': 'Sem internet', 'feat.offline': 'Tudo funciona no modo avião.',
      'feat.langsT': '5 idiomas', 'feat.langs': 'Português (Portugal e Brasil), English, Français e Español, com frases e palavras próprias de cada idioma.',
      'feat.themeT': 'Escuro ou claro', 'feat.theme': 'Muda com um toque, como neste site.',
      'feat.a11yT': 'Fácil de ler', 'feat.a11y': 'Letra grande, bom contraste e certo/errado com ✓ e ✗, não só pela cor.',
      'feat.voiceT': 'Voz', 'feat.voice': 'Os Números ao Contrário podem ser falados em voz alta, no seu idioma.',
      'dl.title': 'Baixar o Foco7', 'dl.lead': 'Gratuito, para Android 7 ou mais recente.',
      'dl.play': 'Em breve. O app está em fase de testes.', 'dl.soon': 'Em breve',
      'dl.apkT': 'APK direto', 'dl.apk': 'O arquivo de instalação nas Releases do GitHub, assinado pelo autor.', 'dl.apkBtn': 'Ver versões',
      'dl.otherT': 'Outras lojas', 'dl.other': 'Huawei AppGallery, Samsung Galaxy Store, APKPure, Uptodown e Aptoide: em breve.',
      'dl.iphone': 'Ainda não há versão para iPhone.',
      'phone.subtitle': '7 exercícios em sequência',
      mirror: [
        ['O gato dorme no sol', 'O gato dorme no sal', 'O gato corre no sol', 'O sol dorme no gato'],
        ['A chuva molha a rua', 'A chuva molha a lua', 'A rua molha a chuva', 'A chave molha a rua'],
        ['Tomo café com leite', 'Tomo café com lente', 'Tomo leite com café', 'Tomo chá com leite'],
      ],
    },
    'en-US': {
      'privacy.title': 'Privacy policy',
      'privacy.updated': 'Last updated: {d} · Applies to the Foco7 app ({id}) for Android and iOS.',
      'meta.title': 'Foco7 — Brain training in 7 exercises',
      'a11y.skip': 'Skip to content',
      'nav.exercises': 'Exercises', 'nav.how': 'How it works', 'nav.privacy': 'Privacy',
      'footer.rights': 'All rights reserved.',
      'theme.toLight': 'Switch to light theme', 'theme.toDark': 'Switch to dark theme',
      'lang.label': 'Language',
      'hero.eyebrow': 'Brain training · Android',
      'hero.title': 'Train your attention with 7 short exercises.',
      'hero.lead': 'A few minutes a day to train focus, perception and working memory. No ads, no account, and your results stay only on your phone.',
      'badge.ads': 'No ads', 'badge.account': 'No account', 'badge.offline': 'Works offline', 'badge.langs': '5 languages',
      'cta.get': 'Get Foco7', 'cta.see': 'See the exercises',
      'ex.title': 'The 7 exercises',
      'ex.lead': 'Each exercise takes a few minutes and has 3 levels: Easy, Medium and Hard. Texts and rules are the same as in the app.',
      'ex.how': 'How to play',
      'demo.title': 'Try it here',
      'demo.lead': 'Three mini exercises, right in your browser. In the app they are bigger, with levels, timing and records.',
      'demo.schulte': 'Tap the numbers from 1 to 9, in order, as fast as you can.',
      'demo.stroop': 'Tap the INK COLOR, not the written word.',
      'demo.mirror': 'Read the mirrored sentence and pick the right one.',
      'demo.again': 'Again',
      'demo.next': 'Next: {n}', 'demo.done': '✓ Done!', 'demo.score': 'Correct: {a} · Errors: {b}',
      'demo.colors': { red: 'Red', blue: 'Blue', green: 'Green', yellow: 'Yellow' },
      'how.title': 'How it works',
      'how.s1t': 'Pick a level', 'how.s1': 'Easy, Medium or Hard. Each exercise explains its rules before you start.',
      'how.s2t': 'Play', 'how.s2': 'A 3-2-1 countdown and you are off. If you leave the app or stop for 2 minutes, the game pauses and the time does not count.',
      'how.s3t': 'See your result', 'how.s3': 'Score, time, errors and how you compare with your best. "New record!" when you beat it.',
      'training.title': "Today's workout",
      'training.text': 'All 7 exercises in a row, at your level. Leave halfway and pick up where you stopped. At the end you get a summary, a comparison with your previous workout and your day streak.',
      'progress.title': 'Progress',
      'progress.text': 'A calendar of your training days, current and longest streak, your best result per level and a chart per exercise. When you are ready, the app suggests the next level.',
      'feat.title': 'Made for you',
      'feat.privacyT': 'Private', 'feat.privacy': 'No account, no servers: your results never leave your phone.',
      'feat.offlineT': 'Offline', 'feat.offline': 'Everything works in airplane mode.',
      'feat.langsT': '5 languages', 'feat.langs': 'Portuguese (Portugal and Brazil), English, French and Spanish, with sentences and words written for each language.',
      'feat.themeT': 'Dark or light', 'feat.theme': 'Switch with one tap, just like on this site.',
      'feat.a11yT': 'Easy to read', 'feat.a11y': 'Large text, good contrast and right/wrong shown with ✓ and ✗, not just color.',
      'feat.voiceT': 'Voice', 'feat.voice': 'Backward Numbers can be read aloud in your language.',
      'dl.title': 'Get Foco7', 'dl.lead': 'Free, for Android 7 or newer.',
      'dl.play': 'Coming soon. The app is in testing.', 'dl.soon': 'Coming soon',
      'dl.apkT': 'Direct APK', 'dl.apk': 'The install file on GitHub Releases, signed by the author.', 'dl.apkBtn': 'See releases',
      'dl.otherT': 'Other stores', 'dl.other': 'Huawei AppGallery, Samsung Galaxy Store, APKPure, Uptodown and Aptoide: coming soon.',
      'dl.iphone': 'There is no iPhone version yet.',
      'phone.subtitle': '7 exercises in a row',
      mirror: [
        ['The cat sleeps in the sun', 'The cat sleeps in the sum', 'The bat sleeps in the sun', 'The sun sleeps in the cat'],
        ['Rain falls on the road', 'Rain falls on the toad', 'The road falls on rain', 'Rain calls on the road'],
        ['I drink tea with milk', 'I drink tea with silk', 'I drink milk with tea', 'I think tea with milk'],
      ],
    },
    'fr-FR': {
      'privacy.title': 'Politique de confidentialité',
      'privacy.updated': 'Dernière mise à jour : {d} · S’applique à l’appli Foco7 ({id}) pour Android et iOS.',
      'meta.title': 'Foco7 — Entraînement cérébral en 7 exercices',
      'a11y.skip': 'Aller au contenu',
      'nav.exercises': 'Exercices', 'nav.how': 'Comment ça marche', 'nav.privacy': 'Confidentialité',
      'footer.rights': 'Tous droits réservés.',
      'theme.toLight': 'Passer au thème clair', 'theme.toDark': 'Passer au thème sombre',
      'lang.label': 'Langue',
      'hero.eyebrow': 'Entraînement cérébral · Android',
      'hero.title': 'Entraîne ton attention en 7 exercices courts.',
      'hero.lead': 'Quelques minutes par jour pour entraîner la concentration, la perception et la mémoire de travail. Sans pub, sans compte, et tes résultats restent uniquement sur ton téléphone.',
      'badge.ads': 'Sans pub', 'badge.account': 'Sans compte', 'badge.offline': 'Fonctionne hors ligne', 'badge.langs': '5 langues',
      'cta.get': 'Obtenir Foco7', 'cta.see': 'Voir les exercices',
      'ex.title': 'Les 7 exercices',
      'ex.lead': 'Chaque exercice dure quelques minutes et a 3 niveaux : Facile, Moyen et Difficile. Les textes et les règles sont ceux de l’appli.',
      'ex.how': 'Comment jouer',
      'demo.title': 'Essaie ici',
      'demo.lead': 'Trois exercices en version mini, dans le navigateur. Dans l’appli, ils sont plus grands, avec niveaux, chrono et records.',
      'demo.schulte': 'Touche les nombres de 1 à 9, dans l’ordre, le plus vite possible.',
      'demo.stroop': 'Touche la COULEUR DE L’ENCRE, pas le mot écrit.',
      'demo.mirror': 'Lis la phrase en miroir et choisis la bonne.',
      'demo.again': 'Encore',
      'demo.next': 'Suivant : {n}', 'demo.done': '✓ Terminé !', 'demo.score': 'Bonnes : {a} · Erreurs : {b}',
      'demo.colors': { red: 'Rouge', blue: 'Bleu', green: 'Vert', yellow: 'Jaune' },
      'how.title': 'Comment ça marche',
      'how.s1t': 'Choisis le niveau', 'how.s1': 'Facile, Moyen ou Difficile. Chaque exercice explique ses règles avant de commencer.',
      'how.s2t': 'Joue', 'how.s2': 'Décompte 3-2-1 et c’est parti. Si tu quittes l’appli ou t’arrêtes 2 minutes, le jeu se met en pause et le temps ne compte pas.',
      'how.s3t': 'Vois ton résultat', 'how.s3': 'Score, temps, erreurs et comparaison avec ton meilleur. « Nouveau record ! » quand tu te dépasses.',
      'training.title': 'Entraînement du jour',
      'training.text': 'Les 7 exercices à la suite, à ton niveau. Si tu t’arrêtes en route, tu reprends là où tu étais. À la fin : le résumé, la comparaison avec l’entraînement précédent et ta série de jours.',
      'progress.title': 'Progression',
      'progress.text': 'Un calendrier des jours d’entraînement, la série actuelle et la plus longue, le meilleur résultat par niveau et un graphique par exercice. Quand tu es prêt, l’appli te propose le niveau suivant.',
      'feat.title': 'Pensé pour toi',
      'feat.privacyT': 'Privé', 'feat.privacy': 'Ni compte ni serveurs : tes résultats ne quittent jamais ton téléphone.',
      'feat.offlineT': 'Hors ligne', 'feat.offline': 'Tout fonctionne en mode avion.',
      'feat.langsT': '5 langues', 'feat.langs': 'Portugais (Portugal et Brésil), anglais, français et espagnol, avec des phrases et des mots propres à chaque langue.',
      'feat.themeT': 'Sombre ou clair', 'feat.theme': 'Change d’un geste, comme sur ce site.',
      'feat.a11yT': 'Facile à lire', 'feat.a11y': 'Grand texte, bon contraste, et juste/faux avec ✓ et ✗, pas seulement par la couleur.',
      'feat.voiceT': 'Voix', 'feat.voice': 'Les Nombres à l’envers peuvent être lus à voix haute, dans ta langue.',
      'dl.title': 'Obtenir Foco7', 'dl.lead': 'Gratuit, pour Android 7 ou plus récent.',
      'dl.play': 'Bientôt. L’appli est en phase de test.', 'dl.soon': 'Bientôt',
      'dl.apkT': 'APK direct', 'dl.apk': 'Le fichier d’installation dans les Releases GitHub, signé par l’auteur.', 'dl.apkBtn': 'Voir les versions',
      'dl.otherT': 'Autres boutiques', 'dl.other': 'Huawei AppGallery, Samsung Galaxy Store, APKPure, Uptodown et Aptoide : bientôt.',
      'dl.iphone': 'Pas encore de version iPhone.',
      'phone.subtitle': '7 exercices à la suite',
      mirror: [
        ['Le chat dort au soleil', 'Le chat dort au sommeil', 'Le chant dort au soleil', 'Le soleil dort au chat'],
        ['La pluie mouille la rue', 'La pluie mouille la roue', 'La rue mouille la pluie', 'La nuit mouille la rue'],
        ['Je bois du café au lait', 'Je bois du café au lit', 'Je bois du lait au café', 'Je vois du café au lait'],
      ],
    },
    'es-ES': {
      'privacy.title': 'Política de privacidad',
      'privacy.updated': 'Última actualización: {d} · Se aplica a la app Foco7 ({id}) para Android e iOS.',
      'meta.title': 'Foco7 — Entrenamiento mental en 7 ejercicios',
      'a11y.skip': 'Saltar al contenido',
      'nav.exercises': 'Ejercicios', 'nav.how': 'Cómo funciona', 'nav.privacy': 'Privacidad',
      'footer.rights': 'Todos los derechos reservados.',
      'theme.toLight': 'Cambiar al tema claro', 'theme.toDark': 'Cambiar al tema oscuro',
      'lang.label': 'Idioma',
      'hero.eyebrow': 'Entrenamiento mental · Android',
      'hero.title': 'Entrena la atención con 7 ejercicios cortos.',
      'hero.lead': 'Unos minutos al día para entrenar la concentración, la percepción y la memoria de trabajo. Sin anuncios, sin cuenta, y tus resultados se quedan solo en tu móvil.',
      'badge.ads': 'Sin anuncios', 'badge.account': 'Sin cuenta', 'badge.offline': 'Funciona sin internet', 'badge.langs': '5 idiomas',
      'cta.get': 'Conseguir Foco7', 'cta.see': 'Ver los ejercicios',
      'ex.title': 'Los 7 ejercicios',
      'ex.lead': 'Cada ejercicio dura pocos minutos y tiene 3 niveles: Fácil, Medio y Difícil. Los textos y las reglas son los de la app.',
      'ex.how': 'Cómo se juega',
      'demo.title': 'Pruébalo aquí',
      'demo.lead': 'Tres ejercicios en versión mini, en el navegador. En la app son más grandes, con niveles, tiempo y récords.',
      'demo.schulte': 'Toca los números del 1 al 9, en orden, lo más rápido que puedas.',
      'demo.stroop': 'Toca el COLOR DE LA TINTA, no la palabra escrita.',
      'demo.mirror': 'Lee la frase en espejo y elige la correcta.',
      'demo.again': 'Otra vez',
      'demo.next': 'Siguiente: {n}', 'demo.done': '✓ ¡Hecho!', 'demo.score': 'Aciertos: {a} · Errores: {b}',
      'demo.colors': { red: 'Rojo', blue: 'Azul', green: 'Verde', yellow: 'Amarillo' },
      'how.title': 'Cómo funciona',
      'how.s1t': 'Elige el nivel', 'how.s1': 'Fácil, Medio o Difícil. Cada ejercicio explica sus reglas antes de empezar.',
      'how.s2t': 'Juega', 'how.s2': 'Cuenta atrás 3-2-1 y empieza. Si sales de la app o paras 2 minutos, el juego se pausa y el tiempo no cuenta.',
      'how.s3t': 'Mira el resultado', 'how.s3': 'Puntuación, tiempo, errores y la comparación con tu mejor marca. «¡Nuevo récord!» cuando te superas.',
      'training.title': 'Entrenamiento de hoy',
      'training.text': 'Los 7 ejercicios seguidos, en tu nivel. Si lo dejas a medias, sigues donde lo dejaste. Al final ves el resumen, la comparación con el entrenamiento anterior y tu racha de días.',
      'progress.title': 'Progreso',
      'progress.text': 'Calendario con los días de entrenamiento, racha actual y la más larga, el mejor resultado por nivel y un gráfico por ejercicio. Cuando estés listo, la app te sugiere el siguiente nivel.',
      'feat.title': 'Pensado para ti',
      'feat.privacyT': 'Privado', 'feat.privacy': 'Sin cuenta ni servidores: tus resultados nunca salen del móvil.',
      'feat.offlineT': 'Sin internet', 'feat.offline': 'Todo funciona en modo avión.',
      'feat.langsT': '5 idiomas', 'feat.langs': 'Portugués (Portugal y Brasil), inglés, francés y español, con frases y palabras propias de cada idioma.',
      'feat.themeT': 'Oscuro o claro', 'feat.theme': 'Cambia con un toque, como en esta web.',
      'feat.a11yT': 'Fácil de leer', 'feat.a11y': 'Letra grande, buen contraste y acierto/error con ✓ y ✗, no solo por el color.',
      'feat.voiceT': 'Voz', 'feat.voice': 'Los Números al revés se pueden decir en voz alta, en tu idioma.',
      'dl.title': 'Conseguir Foco7', 'dl.lead': 'Gratis, para Android 7 o posterior.',
      'dl.play': 'Próximamente. La app está en fase de pruebas.', 'dl.soon': 'Próximamente',
      'dl.apkT': 'APK directo', 'dl.apk': 'El archivo de instalación en las Releases de GitHub, firmado por el autor.', 'dl.apkBtn': 'Ver versiones',
      'dl.otherT': 'Otras tiendas', 'dl.other': 'Huawei AppGallery, Samsung Galaxy Store, APKPure, Uptodown y Aptoide: próximamente.',
      'dl.iphone': 'Todavía no hay versión para iPhone.',
      'phone.subtitle': '7 ejercicios seguidos',
      mirror: [
        ['El gato duerme al sol', 'El gato duerme al sal', 'El pato duerme al sol', 'El sol duerme al gato'],
        ['La lluvia moja la calle', 'La lluvia moja la calma', 'La calle moja la lluvia', 'La lluvia baja la calle'],
        ['Tomo café con leche', 'Tomo café con noche', 'Tomo leche con café', 'Como café con leche'],
      ],
    },
  };

  /* ---------- Estado ---------- */
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  var root = document.documentElement;
  var lang = pickLanguage();

  /** Igual à app: pt-BR para pt com região BR, outro pt → pt-PT; en/fr/es; senão en-US. */
  function detect(tag) {
    if (!tag) return null;
    var t = String(tag).toLowerCase();
    if (t === 'pt-br') return 'pt-BR';
    if (t.indexOf('pt') === 0) return 'pt-PT';
    if (t.indexOf('en') === 0) return 'en-US';
    if (t.indexOf('fr') === 0) return 'fr-FR';
    if (t.indexOf('es') === 0) return 'es-ES';
    return null;
  }
  function pickLanguage() {
    var q = new URLSearchParams(location.search).get('lang');
    var byQuery = LANGS.filter(function (l) { return l.code.toLowerCase() === String(q).toLowerCase(); })[0];
    if (byQuery) return byQuery.code;
    var hash = location.hash.slice(1);
    var byHash = LANGS.filter(function (l) { return l.anchor === hash; })[0];
    if (byHash) return byHash.code;
    var saved = store.get('foco7.lang');
    if (S[saved]) return saved;
    var list = navigator.languages || [navigator.language];
    for (var i = 0; i < list.length; i++) { var d = detect(list[i]); if (d) return d; }
    return 'en-US';
  }

  function tr(key, vars) {
    var v = (S[lang] && S[lang][key]) || S['pt-PT'][key] || '';
    if (vars) Object.keys(vars).forEach(function (k) { v = v.replace('{' + k + '}', vars[k]); });
    return v;
  }
  function app() { return (window.APP_TEXTS && window.APP_TEXTS[lang]) || {}; }
  function fmt(n, digits) {
    return new Intl.NumberFormat(lang, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n);
  }
  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') e.textContent = attrs[k];
      else if (k === 'style') e.style.cssText = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /** <ion-icon name="…"> → o carácter da fonte Ionicons (assets/js/icons.js). */
  function paintIcons() {
    document.querySelectorAll('ion-icon').forEach(function (n) {
      var code = window.ICONS && window.ICONS[n.getAttribute('name')];
      if (code && !n.textContent) n.textContent = String.fromCodePoint(code);
      n.setAttribute('aria-hidden', 'true');
    });
  }

  /* ---------- Idioma ---------- */
  function applyLanguage() {
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      var v = tr(n.getAttribute('data-i18n'));
      if (v) n.textContent = v;
    });
    document.querySelectorAll('[data-ex-name]').forEach(function (n) {
      var ex = app().exercises && app().exercises[n.getAttribute('data-ex-name')];
      if (ex) n.textContent = ex.name;
    });
    if (document.body.classList.contains('page-home')) document.title = tr('meta.title');
    if (document.body.classList.contains('page-privacy')) document.title = 'Foco7 — ' + tr('privacy.title');
    var cur = LANGS.filter(function (l) { return l.code === lang; })[0];
    document.getElementById('lang-flag').textContent = cur.flag;
    document.getElementById('lang-code').textContent = cur.short;
    document.getElementById('lang-btn').setAttribute('aria-label', tr('lang.label') + ': ' + cur.name);
    document.querySelectorAll('.lang-menu button').forEach(function (b) {
      b.setAttribute('aria-selected', String(b.dataset.code === lang));
    });
    updateThemeLabel();
    renderPhone();
    renderExercises();
    startStroop();
    startMirror();
    resetSchulte();
    filterPrivacy();
    paintIcons();
  }
  function setLanguage(code) {
    lang = code;
    store.set('foco7.lang', code);
    var url = new URL(location.href);
    url.searchParams.set('lang', code);
    if (document.body.classList.contains('page-privacy')) url.hash = '';
    history.replaceState(null, '', url);
    applyLanguage();
  }
  function buildLangMenu() {
    var btn = document.getElementById('lang-btn');
    var menu = document.getElementById('lang-menu');
    LANGS.forEach(function (l) {
      var b = el('button', { type: 'button', role: 'option', 'data-code': l.code }, [
        el('span', { class: 'flag', text: l.flag }), el('span', { text: l.name }),
      ]);
      b.addEventListener('click', function () { close(); setLanguage(l.code); btn.focus(); });
      menu.appendChild(el('li', {}, [b]));
    });
    function close() { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      if (open) (menu.querySelector('[aria-selected="true"]') || menu.querySelector('button')).focus();
    });
    document.addEventListener('click', function (e) { if (!menu.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { close(); btn.focus(); } });
  }

  /* ---------- Tema (escuro por omissão, como a app) ---------- */
  function updateThemeLabel() {
    var b = document.getElementById('theme-btn');
    b.setAttribute('aria-label', root.dataset.theme === 'dark' ? tr('theme.toLight') : tr('theme.toDark'));
  }
  document.getElementById('theme-btn').addEventListener('click', function () {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    store.set('foco7.theme', root.dataset.theme);
    document.querySelector('meta[name="theme-color"]').setAttribute('content', root.dataset.theme === 'dark' ? '#10104F' : '#F4F5FB');
    updateThemeLabel();
  });

  /* ---------- Início da app em miniatura ---------- */
  function renderPhone() {
    var box = document.getElementById('phone-home');
    if (!box) return;
    var a = app();
    var logoBase = document.querySelector('.brand .logo-light').getAttribute('src').replace(/foco7-logo-horizontal\.svg$/, '');
    box.innerHTML = '';
    var cur = LANGS.filter(function (l) { return l.code === lang; })[0];
    box.appendChild(el('div', { class: 'm-top' }, [
      el('span', {}, [
        el('img', { class: 'logo-light', src: logoBase + 'foco7-logo-horizontal.svg', alt: '' }),
        el('img', { class: 'logo-dark', src: logoBase + 'foco7-logo-horizontal-dark.svg', alt: '' }),
      ]),
      el('span', { class: 'm-quick' }, [el('span', { text: cur.flag }), el('span', { text: root.dataset.theme === 'dark' ? '☀' : '☾' })]),
    ]));
    box.appendChild(el('p', { class: 'm-hello', text: a.greeting || '' }));
    box.appendChild(el('p', { class: 'm-sub', text: a.subtitle || '' }));
    box.appendChild(el('div', { class: 'm-training' }, [
      el('b', { text: a.trainingTitle || '' }),
      el('span', { text: tr('phone.subtitle') + ' · ' + ((a.levels && a.levels.medium) || '') }),
      el('div', { class: 'm-row' }, [el('span', { class: 'm-badge', text: a.statusTodo || '' }), el('span', { text: a.actionStart || '' })]),
    ]));
    box.appendChild(el('p', { class: 'm-title', text: a.exercisesTitle || '' }));
    var grid = el('div', { class: 'm-grid' });
    ORDER.forEach(function (id) {
      var ex = a.exercises && a.exercises[id];
      if (!ex) return;
      grid.appendChild(el('div', { class: 'm-card', style: '--accent: var(--acc-' + META[id].accent + ')' }, [
        el('ion-icon', { name: META[id].icon }), el('b', { text: ex.name }),
      ]));
    });
    box.appendChild(grid);
  }
  document.getElementById('theme-btn').addEventListener('click', function () { renderPhone(); paintIcons(); });

  /* ---------- Lista dos exercícios ---------- */
  function renderExercises() {
    var list = document.getElementById('ex-list');
    if (!list) return;
    var a = app();
    list.innerHTML = '';
    ORDER.forEach(function (id) {
      var ex = a.exercises && a.exercises[id];
      if (!ex) return;
      var steps = el('ol', {}, ex.instructions.map(function (s) { return el('li', { text: s }); }));
      list.appendChild(el('article', { class: 'card ex', style: '--accent: var(--acc-' + META[id].accent + ')' }, [
        el('div', { class: 'ex-head' }, [
          el('span', { class: 'ex-icon' }, [el('ion-icon', { name: META[id].icon, 'aria-hidden': 'true' })]),
          el('div', {}, [el('h3', { text: ex.name }), el('p', { class: 'sci', text: ex.scientificName })]),
        ]),
        el('span', { class: 'trains', text: ex.trains }),
        el('p', { text: ex.description }),
        el('details', {}, [el('summary', { text: tr('ex.how') }), steps]),
        el('div', { class: 'levels' }, ['easy', 'medium', 'hard'].map(function (l) { return el('span', { text: a.levels[l] }); })),
      ]));
    });
  }

  /* ---------- Mini Números em Ordem (3×3) ---------- */
  var sch = { next: 1, start: 0, timer: 0 };
  function resetSchulte() {
    var grid = document.getElementById('schulte');
    if (!grid) return;
    clearInterval(sch.timer);
    sch.next = 1; sch.start = 0;
    grid.innerHTML = '';
    shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).forEach(function (n) {
      var b = el('button', { type: 'button', text: String(n), 'aria-label': String(n) });
      b.addEventListener('click', function () { tapSchulte(b, n); });
      grid.appendChild(b);
    });
    document.getElementById('schulte-next').textContent = tr('demo.next', { n: 1 });
    document.getElementById('schulte-time').textContent = fmt(0, 1) + ' s';
  }
  function tapSchulte(b, n) {
    if (sch.next > 9 || b.classList.contains('done')) return;
    if (n !== sch.next) {
      b.classList.add('wrong');
      setTimeout(function () { b.classList.remove('wrong'); }, 250);
      return;
    }
    if (n === 1) {
      sch.start = performance.now();
      sch.timer = setInterval(function () {
        document.getElementById('schulte-time').textContent = fmt((performance.now() - sch.start) / 1000, 1) + ' s';
      }, 100);
    }
    b.classList.add('done');
    sch.next++;
    if (sch.next > 9) {
      clearInterval(sch.timer);
      document.getElementById('schulte-time').textContent = fmt((performance.now() - sch.start) / 1000, 1) + ' s';
      document.getElementById('schulte-next').textContent = tr('demo.done');
    } else {
      document.getElementById('schulte-next').textContent = tr('demo.next', { n: sch.next });
    }
  }
  var resetBtn = document.getElementById('schulte-reset');
  if (resetBtn) resetBtn.addEventListener('click', resetSchulte);

  /* ---------- Mini Cor ou Palavra ---------- */
  var COLORS = ['red', 'blue', 'green', 'yellow'];
  var stroop = { ok: 0, bad: 0, ink: 'red' };
  function startStroop() {
    var box = document.getElementById('stroop-buttons');
    if (!box) return;
    stroop.ok = 0; stroop.bad = 0;
    box.innerHTML = '';
    var names = tr('demo.colors');
    COLORS.forEach(function (c) {
      var b = el('button', { type: 'button', 'aria-label': names[c], title: names[c], style: '--c: var(--ink-' + c + ')' });
      b.addEventListener('click', function () { answerStroop(c); });
      box.appendChild(b);
    });
    nextStroop();
  }
  function nextStroop() {
    var word = COLORS[Math.floor(Math.random() * 4)];
    var ink = shuffle(COLORS.filter(function (c) { return c !== word; }))[0];
    stroop.ink = ink;
    var w = document.getElementById('stroop-word');
    w.textContent = (app().stroopWords || {})[word] || word.toUpperCase();
    w.style.color = 'var(--ink-' + ink + ')';
    document.getElementById('stroop-score').textContent = tr('demo.score', { a: stroop.ok, b: stroop.bad });
  }
  function answerStroop(c) {
    var mark = document.getElementById('stroop-mark');
    var right = c === stroop.ink;
    if (right) stroop.ok++; else stroop.bad++;
    mark.textContent = right ? '✓' : '✗';
    mark.className = 'mark ' + (right ? 'ok' : 'bad');
    nextStroop();
  }

  /* ---------- Mini Leitura ao Espelho ---------- */
  var mir = { i: 0, ok: 0, bad: 0, locked: false };
  function startMirror() {
    if (!document.getElementById('mirror-text')) return;
    mir.i = 0; mir.ok = 0; mir.bad = 0;
    showMirror();
  }
  function showMirror() {
    var items = tr('mirror');
    var item = items[mir.i % items.length];
    mir.locked = false;
    document.getElementById('mirror-text').textContent = item[0];
    document.getElementById('mirror-score').textContent = tr('demo.score', { a: mir.ok, b: mir.bad });
    var box = document.getElementById('mirror-options');
    box.innerHTML = '';
    shuffle(item.slice()).forEach(function (opt) {
      var b = el('button', { type: 'button', text: opt });
      b.addEventListener('click', function () {
        if (mir.locked) return;
        mir.locked = true;
        var right = opt === item[0];
        if (right) mir.ok++; else mir.bad++;
        b.classList.add(right ? 'ok' : 'bad');
        b.textContent = (right ? '✓ ' : '✗ ') + opt;
        var mark = document.getElementById('mirror-mark');
        mark.textContent = right ? '✓' : '✗';
        mark.className = 'mark ' + (right ? 'ok' : 'bad');
        setTimeout(function () { mir.i++; showMirror(); }, 900);
      });
      box.appendChild(b);
    });
  }

  /* ---------- Política: mostra só o idioma escolhido ---------- */
  function filterPrivacy() {
    var prose = document.querySelector('.page-privacy .prose');
    if (!prose) return;
    var anchors = LANGS.map(function (l) { return l.anchor; });
    var current = null;
    Array.prototype.forEach.call(prose.children, function (child) {
      var a = child.id && anchors.indexOf(child.id) >= 0 ? child : child.querySelector && child.querySelector('a[id]');
      if (a && anchors.indexOf(a.id) >= 0) current = a.id;
      var mine = LANGS.filter(function (l) { return l.code === lang; })[0].anchor;
      // Antes do 1.º idioma: título e data traduzidos; os links de idioma escondem-se (há o seletor).
      if (current === null) {
        if (child.tagName === 'H1') child.textContent = 'Foco7 — ' + tr('privacy.title');
        else if (child.querySelector && child.querySelector('a[href^="#"]')) child.classList.add('lang-hidden');
        else if (child.tagName === 'P' && document.body.dataset.updated) {
          var d = new Date(document.body.dataset.updated + 'T12:00:00');
          child.textContent = tr('privacy.updated', {
            d: new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric' }).format(d),
            id: 'cv.foco7.app',
          });
        }
        return;
      }
      child.classList.toggle('lang-hidden', current !== mine);
      if (child.tagName === 'P' && child.firstElementChild && child.firstElementChild.tagName === 'STRONG' &&
          child.textContent.trim().indexOf(child.firstElementChild.textContent.trim()) === 0 &&
          child.firstElementChild.textContent.length > 40) child.classList.add('summary-box');
    });
  }
  window.addEventListener('hashchange', function () {
    var hash = location.hash.slice(1);
    var l = LANGS.filter(function (x) { return x.anchor === hash; })[0];
    if (l && document.body.classList.contains('page-privacy')) setLanguage(l.code);
  });

  buildLangMenu();
  applyLanguage();
})();
