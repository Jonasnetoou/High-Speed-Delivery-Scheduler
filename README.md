# High-Speed-Delivery-Scheduler

Extensão de alta performance para automação de agendamentos logísticos, reduzindo a latência de resposta humana e otimizando o faturamento semanal em 100% através de Sniper Mode e processamento paralelo.
A Jornada do Protocoloco Jovem Programador: Da Frustração ao Sucesso Tecnológico

A história deste projeto nasce de uma necessidade vital e de **uma desigualdade numérica avassaladora no setor de logística urban**a. Imagine um cenário onde mais de **800 entregadores profissionais estão ativos**, todos dependendo de uma plataforma digital para garantir o sustento de suas famílias. Todos os dias, precisamente **às 10 horas da manhã**, o sistema abre as janelas de agendamento. O problema reside na **matemática cruel do mercado: são apenas 87 vagas disponíveis para esse universo de centenas de pessoas**. Na prática, isso significa que em apenas **dois segundos após a abertura, todas as oportunidades já estão esgotadas (10:00:02)**.

Para um ser humano, a **competição é desleal**. O processo manual exige que o entregador abra o site, utilize comandos de busca como o **"Ctrl + F" ou role a página freneticamente tentando localizar um restaurante específico em uma lista que não segue ordem alfabética e mistura regiões aleatoriamente**. Muitas vezes, por puro desespero, os entregadores **aceitavam qualquer vaga que aparecesse**, mesmo que fosse em uma **"Subpraça" — regiões afastadas que exigem que a moto rode muito mais quilômetros para ganhar valores inferiores, o que acaba por corroer o lucro com gastos de combustível e manutenção**.

Eu me encontrava nesse **ciclo de frustração**, sendo muitas vezes "**lento demais**" para o sistema e ficando **sem agenda para trabalhar**. Foi então que decidi usar a tecnologia como um divisor de águas. Mesmo sem formação prévia em programação, mas com o rigor de quem busca soluções reais, iniciei uma colaboração com a Inteligência Artificial. No começo, a comunicação era formal e tateante, mas o conselho da IA foi claro: transformar aquela lógica em uma extensão para o Google Chrome.

O desenvolvimento foi um processo de "**tentativa e erro**" que durou cerca de dois meses. Eu extraía o código HTML bruto da página de agendamentos e o fornecia à IA para que ela entendesse a estrutura dos elementos. O primeiro protótipo conseguia identificar o restaurante, **mas ainda falhava em tarefas críticas, como selecionar o turno, aceitar os termos de uso ou clicar no botão final de confirmação**. Com persistência, fomos refinando o código até que ele se tornasse **100% integral e funcional**.

A grande virada técnica ocorreu quando percebemos que as **lojas mudavam de nome constantemente**, o que quebrava o script. Para resolver isso, implementamos um **sistema robusto de filtros de Inclusão e Exclusão**. Se eu quisesse trabalhar em um restaurante específico em Palhoça, mas ele também tivesse uma unidade em Florianópolis, eu configurava o código para incluir termos como "Pasta" e "Way", mas excluir qualquer variação de "Flori". Isso garantia que o bot ignorasse alvos indesejados e focasse apenas no que era rentável.

Além da **velocidade instantânea** na abertura das 10h, desenvolvi o chamado "**Modo Sniper**". Este módulo permitia que o script ficasse monitorando a página durante todo o dia, inclusive nas madrugadas. Se algum entregador desistisse de uma vaga ou se o sistema liberasse um horário inesperadamente, o Sniper capturava a oportunidade no milissegundo em que ela aparecia no HTML, antes mesmo de qualquer olho humano perceber. Nos vídeos de teste, é possível ver o sistema ignorando vagas de baixo valor, como o "**Jantinha do Mineiro**", enquanto aguardava pacientemente pelo alvo principal.

Para garantir **100% de sucesso**, a arquitetura evoluiu para o uso de múltiplos navegadores e janelas simultâneas, criando um sistema de processamento paralelo onde, se uma janela encontrasse um conflito de horário, a outra já teria garantido um restaurante alternativo. Eu também adaptei o código para funcionar no navegador **Kiwi Browser**, permitindo que colegas que não possuíam computador pudessem usar a ferramenta em seus celulares, **democratizando o acesso ao trabalho**.

O impacto foi transformador. Minha renda semanal, que flutuava em torno de **R$ 700 a R$ 1.000**, saltou para uma média consistente de **R$ 1.712,87**, chegando a registrar um faturamento mensal de **R$ 7.368,69** entre **1 dezembro de 2025 e 1 janeiro de 2026**. Amigos que utilizaram o sistema conseguiram estabilidade financeira e até trocaram de moto. Este projeto prova que a programação é, acima de tudo, uma ferramenta para resolver problemas do mundo real através de insistência e lógica, **transformando a frustração em uma vantagem competitiva inalcançável por meios manuais**.

----------------------------------------------------------------------------------------------------------------------------

**🎬 Demonstração Técnica: Modo Sniper em Ação**

No vídeo abaixo, é possível observar o algoritmo a monitorizar a página em tempo real. Note que o sistema identifica a aparição da vaga "Jantinha do Mineiro", mas, através da lógica de filtragem seletiva, decide ignorá-la instantaneamente por não corresponder aos critérios de alta rentabilidade definidos. O motor permanece em "espera ativa" até localizar o alvo configurado.

[![Demonstração do Modo Sniper](https://img.youtube.com/vi/8e6-FXYHfeI/0.jpg)](https://youtube.com/shorts/8e6-FXYHfeI)


------------------------------------------------------------------------------------------------------------------------------

**📺 Demonstração de Alta Disponibilidade (Multi-Window)**

Neste vídeo, apresento o sistema operando em escala através de múltiplas instâncias e navegadores simultâneos. Esta estratégia de processamento paralelo garante 100% de sucesso, tratando conflitos de horário em milissegundos e assegurando a vaga no alvo secundário caso o primário apresente instabilidade.

[![Demonstração Multi-Janelas](https://img.youtube.com/vi/An8xO2pqF18/0.jpg)](https://youtu.be/An8xO2pqF18)

Este vídeo demonstra a robustez do Protocoloco High Speed Delivery Scheduler operando em ambiente de concorrência extrema (800+ entregadores para 87 vagas).

**Demonstração de Alta Disponibilidade e Gestão de Concorrência**

**Destaques da Operação no Vídeo:**

**Gestão de Conflitos de Horário:** Note que, quando uma janela exibe erro de "vaga preenchida", isso é a prova do sucesso do algoritmo; significa que outra instância já assegurou o agendamento no mesmo milissegundo, gerando um conflito de horário que o sistema trata automaticamente para garantir que o entregador nunca fique sem escala.

**Viabilidade Comercial (SaaS):** A robustez do sistema permitiu a criação de um serviço paralelo de agendamento para terceiros, onde usuários pagavam uma taxa semanal de R$ 200,00 para garantir suas escalas através desta tecnologia. **Gerando R$ 2500-3000 / mês extra**.

**Arquitetura Paralela:** Execução simultânea em múltiplas janelas do Chrome para mitigar conflitos de horários e assegurar redundância de rede. 

**Portabilidade Kiwi Browser:** Demonstração da adaptação do código para dispositivos móveis, permitindo que usuários sem computador compitam com a mesma eficiência. 

**Inteligência de Rede:** O script processa a injeção de dados no DOM no milissegundo em que as vagas são disponibilizadas, sendo 100% mais rápido que a interação humana. 

**Taxa de Sucesso Garantida:** O sistema só não captura o agendamento se o restaurante não abrir vagas. 

**Impacto Real:** Solução que permitiu elevar o faturamento semanal de R$ 700 para mais de R$ 1.700, através da otimização inteligente de escala. 

**Totalizando:** Renda geral por volta de **R$ 9.000 - 10.000 mensal**.

*O motor foi adaptado também para dispositivos móveis via Kiwi Browser, garantindo portabilidade e acessibilidade para usuários sem acesso a computadores.*
