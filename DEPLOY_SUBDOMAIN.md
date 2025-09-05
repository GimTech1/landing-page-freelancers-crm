# 🚀 Deploy do crm-freelancers-lp como Subdomínio

## 📋 Configuração de Subdomínio

### **URLs Finais:**
- **CRM Principal**: `crm.investmoneysa.com.br`
- **Landing Page**: `freelancers.investmoneysa.com.br`

## 🛠️ Passos para Deploy

### **1️⃣ Deploy no Vercel**

1. **Acesse o Vercel Dashboard**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta

2. **Importar Projeto**
   - Clique em "New Project"
   - Conecte com GitHub (se o projeto estiver no GitHub)
   - Ou faça upload do projeto `crm-freelancers-lp`

3. **Configurações do Projeto**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (raiz do projeto)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### **2️⃣ Configurar Domínio Personalizado**

1. **No Dashboard do Vercel**
   - Vá para o projeto `crm-freelancers-lp`
   - Clique em "Settings" → "Domains"

2. **Adicionar Domínio**
   - Clique em "Add Domain"
   - Digite: `freelancers.investmoneysa.com.br`
   - Clique em "Add"

3. **Configurar DNS**
   - O Vercel mostrará as configurações DNS necessárias
   - Anote o valor do CNAME

### **3️⃣ Configurar DNS no Provedor de Domínio**

1. **Acesse o painel do provedor de domínio** (onde está registrado `investmoneysa.com.br`)

2. **Adicionar Registro CNAME**
   ```
   Tipo: CNAME
   Nome: freelancers
   Valor: cname.vercel-dns.com (ou o valor fornecido pelo Vercel)
   TTL: 3600 (ou padrão)
   ```

3. **Aguardar Propagação**
   - Pode levar de 5 minutos a 24 horas
   - Use ferramentas como `nslookup` para verificar

### **4️⃣ Verificar Configuração**

1. **Teste o Subdomínio**
   ```bash
   # No terminal
   nslookup freelancers.investmoneysa.com.br
   ```

2. **Acesse no Navegador**
   - Vá para `https://freelancers.investmoneysa.com.br`
   - Deve carregar a landing page

## 🔧 Configurações Adicionais

### **SSL/HTTPS**
- O Vercel configura automaticamente SSL
- Certificado Let's Encrypt gratuito

### **Performance**
- CDN global automático
- Cache otimizado
- Compressão gzip

### **Monitoramento**
- Analytics do Vercel
- Logs de deploy
- Métricas de performance

## 🚨 Troubleshooting

### **Problema: Subdomínio não carrega**
- Verifique se o DNS foi propagado
- Aguarde até 24 horas
- Verifique se o CNAME está correto

### **Problema: Erro 404**
- Verifique se o build foi bem-sucedido
- Confirme se o `vercel.json` está correto
- Verifique se o domínio está configurado no Vercel

### **Problema: CSS não carrega**
- Verifique se o Tailwind está configurado corretamente
- Confirme se os assets estão sendo servidos

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do Vercel
2. Teste localmente com `npm run preview`
3. Verifique a configuração DNS
4. Entre em contato com o suporte do Vercel se necessário
