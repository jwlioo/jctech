# Site JC Tech

## Estrutura

A página inicial reúne proposta, visão dos serviços, produtos, implantação, equipe, marcas e contato. A antiga página de Soluções foi removida a pedido do proprietário. Os links internos têm rolagem com aceleração e desaceleração, respeitam movimento reduzido e descontam a altura da navegação fixa.

## Catálogo escalável

Os produtos são definidos em `src/data/products.ts` e renderizados por `ProductsSection`. Para acrescentar um produto, adicione uma entrada com ID único, nome, categoria, descrição, canais, recursos e chamada de contato. O campo opcional `logo` recebe `{ src: "/products/intelligence.png", alt: "Intelligence" }`; a imagem deve ficar em `public/products/`. O nome em texto é usado enquanto a imagem não está disponível.

`preview: "conversation"` ativa o celular ilustrativo. `officialWhatsApp: true` exibe a identificação da integração com a API oficial da Meta apenas nos produtos que oferecem esse recurso.

## Intelligence

Nome white label fornecido pelo proprietário, baseado na HelenaCRM. Não foram utilizados preços ou métricas da Helena como se fossem da JC Tech.

Fontes consultadas em 25/10/2026:
- https://www.helenacrm.com/
- https://www.helenacrm.com/seja-parceiro
- https://docs.flw.chat/guide/documentacao/apps/sequencia
- https://docs.flw.chat/guide/documentacao/crm

## Demonstração e contato

O celular usa perspectiva em CSS, flutuação, mensagens sequenciais e três pontos animados durante a digitação da IA. É uma demonstração com dados fictícios. Os temporizadores e a flutuação param fora da área visível, em abas ocultas ou por pausa manual. A preferência de movimento reduzido desativa os efeitos visuais, sem saltar a sequência para a última mensagem. No mobile, “Quero conhecer” aparece abaixo do celular.

O formulário abre somente por interação. Ele prepara uma mensagem e abre o WhatsApp para o visitante enviar. Não registra dados em um CRM e não envia mensagens automaticamente.

## Identidade e execução

O título da aba é JC Tech e o ícone está em `public/favicon.svg`. Fontes são locais em `public/fonts/`. As fontes das logos estão em `public/brands/SOURCES.md`; o símbolo da Meta foi obtido em https://cdn.simpleicons.org/meta/0866FF .

Desenvolvimento local: `npm install` e `npm run dev`.
Validação: `npx tsc --noEmit` e `npm run build`.

A demonstração só inicia quando pelo menos 25% da tela do celular estiver visível. Ao sair completamente da área visível ou voltar à aba, retorna à primeira mensagem. Após a última resposta, aguarda 3,5 segundos e reinicia no topo. A rolagem interna é atualizada diretamente, sem depender da frequência de animação do navegador.
