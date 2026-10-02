# foco7-site

Site público do **Foco7**, publicado no GitHub Pages: https://admilson-landim.github.io/foco7-site/

- Política de privacidade: https://admilson-landim.github.io/foco7-site/privacidade/
- APK: [Releases](https://github.com/Admilson-Landim/foco7-site/releases)

O site segue a app: as mesmas cores e temas (escuro por omissão, claro), o logo, os 5 idiomas
(pt-PT, pt-BR, en-US, fr-FR, es-ES) e os textos dos exercícios. Não faz pedidos a outros sites
(ícones e tudo o resto estão aqui).

| Ficheiro | O que é |
|---|---|
| `index.html` | Página inicial (exercícios, mini-jogos, como funciona, transferir) |
| `privacidade.md` | Política de privacidade, 5 idiomas (mostra só o escolhido) |
| `_layouts/default.html`, `_layouts/doc.html` | Cabeçalho, rodapé, seletor de idioma e tema |
| `assets/css/site.css` | Estilo: tokens de cor de `Foco7/src/theme.ts` |
| `assets/js/site.js` | Textos do site nos 5 idiomas, tema, idioma e mini-jogos |
| `assets/js/app-texts.js` | **Gerado** — textos dos exercícios, de `Foco7/src/i18n` |
| `assets/js/icons.js`, `assets/fonts/ionicons-subset.woff2` | **Gerados** — ícones Ionicons da app |
| `assets/img/` | Logo, símbolo, favicon e gráfico de destaque (cópias de `Foco7`) |

Atualizar a partir do projeto da app (pasta `Foco7` ao lado desta):

```bash
cd ../Foco7
node scripts/export-site-texts.cjs ../foco7-site/assets/js/app-texts.js
scripts/export-site-icons.sh ../foco7-site            # precisa de: pip install fonttools brotli
cp docs/privacidade.md ../foco7-site/privacidade.md   # a política tem a fonte no Foco7
```

Ver localmente: `bundle exec jekyll serve` (ou `jekyll serve`) e abrir http://localhost:4000/foco7-site/

© 2026 Admilson Landim. Todos os direitos reservados.
