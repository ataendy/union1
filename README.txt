# Ecos do Silêncio - Landing Page Estática

Site de lançamento de livro usando apenas HTML, CSS e JavaScript puro.

## 📁 Estrutura de Arquivos

```
static-site/
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript
├── README.md       # Este arquivo
└── assets/         # Pasta para imagens (criar)
    ├── hero-bg.jpg
    ├── book-cover.png
    ├── author.jpg
    ├── library-bg.jpg
    └── video-bg.mp4 (opcional)
```

## 🚀 Como Usar

1. **Crie a pasta de assets:**
   ```bash
   mkdir assets
   ```

2. **Adicione suas imagens na pasta `assets/`:**
   - `hero-bg.jpg` - Imagem de fundo da seção principal (1920x1080 recomendado)
   - `book-cover.png` - Capa do livro (600x900 recomendado)
   - `author.jpg` - Foto do autor (600x800 recomendado)
   - `library-bg.jpg` - Imagem de fundo para citações (1920x1080 recomendado)
   - `video-bg.mp4` - Vídeo de fundo opcional

3. **Abra o arquivo `index.html` no navegador:**
   - Clique duas vezes no arquivo, ou
   - Arraste para o navegador, ou
   - Use um servidor local (recomendado para o vídeo de fundo)

## 🎨 Personalização

### Cores
Edite as variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --primary: hsl(45, 80%, 55%);  /* Dourado */
    --background: hsl(0, 0%, 3%);   /* Preto */
    /* ... outras cores */
}
```

### Textos
Edite diretamente no `index.html`:
- Título do livro
- Descrição
- Citações
- Informações do autor
- Preços

### Fontes
As fontes (Playfair Display e Raleway) são carregadas do Google Fonts. Para usar outras, edite a tag `<link>` no `<head>`.

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Laptop (1024px)
- Tablet (768px)
- Mobile (320px+)

## 🎬 Seção de Vídeo

Para adicionar um vídeo de fundo:
1. Coloque o arquivo `video-bg.mp4` na pasta `assets/`
2. O vídeo será reproduzido automaticamente em loop

Para o modal de trailer, edite a URL no `script.js`:
```javascript
const videoUrl = 'https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1';
```

## 🔧 Servidor Local (Opcional)

Para melhor performance e funcionamento do vídeo:

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js (npx):**
```bash
npx serve
```

**PHP:**
```bash
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 📝 Licença

Livre para uso pessoal e comercial.

---

Desenvolvido com ❤️ para o lançamento de "Ecos do Silêncio"
