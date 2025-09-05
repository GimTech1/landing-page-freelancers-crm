import { useState, useEffect } from 'react';
import { DollarSign, Smartphone, Trophy, Target } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'animate-fade-in' : 'opacity-0'}`}
      style={{
        animationDelay: inView ? `${delay}s` : '0s',
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

function App() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Ganhe dinheiro indicando pacientes e clínicas';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 z-50 p-6">
        <img 
          src="/logo.png" 
          alt="Investmoney Logo" 
          className="h-12 w-auto"
        />
      </header>

      {/* Hero Section */}
      <section style={{background: 'var(--bg-hero-gradient)'}} className="relative pt-32 pb-24 px-4 text-white overflow-hidden">
        {/* Elementos animados no fundo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-16 h-16 bg-white rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-white rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-white rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute bottom-20 right-10 w-8 h-8 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
          <div className="absolute top-1/2 left-20 w-6 h-6 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight min-h-[200px] md:min-h-[300px] flex flex-col items-center justify-center">
            <span className="inline-block">
              {displayText}
              {isTyping && <span className="animate-blink">|</span>}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-300 animate-fade-in" style={{animationDelay: '3s', animationFillMode: 'both'}}>
            Trabalhe de onde quiser, sem horário fixo, e receba bônus por cada tratamento fechado.
          </p>
          <button 
            onClick={() => window.open('https://crm.investmoneysa.com.br/cadastro', '_blank')}
            className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-white text-black animate-fade-in cursor-pointer" 
            style={{animationDelay: '4s', animationFillMode: 'both'}}
          >
            Quero ser Freelancer Investmoney
          </button>
        </div>
      </section>

      {/* Como Funciona */}
      <SectionWrapper className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Como Funciona?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <SectionWrapper className="text-center group" delay={0.2}>
              <div style={{background: 'var(--bg-hero-gradient)'}} className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <span className="text-white text-3xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cadastre-se na plataforma</h3>
              <p className="text-lg leading-relaxed text-gray-600">Crie sua conta de forma rápida e simples.</p>
            </SectionWrapper>
            <SectionWrapper className="text-center group" delay={0.4}>
              <div style={{background: 'var(--bg-hero-gradient)'}} className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <span className="text-3xl text-white font-bold text-accent">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Indique pacientes ou clínicas</h3>
              <p className="text-lg leading-relaxed text-gray-600">Use seus contatos para indicar interessados.</p>
            </SectionWrapper>
            <SectionWrapper className="text-center group" delay={0.6}>
              <div style={{background: 'var(--bg-hero-gradient)'}} className="border-2 border-gray-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <span className="text-3xl text-white font-bold text-accent">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Receba bônus de fechamento em PIX</h3>
              <p className="text-lg leading-relaxed text-gray-600">Ganhe por cada tratamento fechado.</p>
            </SectionWrapper>
          </div>
        </div>
      </SectionWrapper>

      {/* Benefícios */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Benefícios para o Freelancer</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-shadow duration-300" delay={0.2}>
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-6">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Bônus imediato</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Receba 0,5% do valor de cada tratamento fechado.</p>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-shadow duration-300" delay={0.4}>
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-6">
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Plataforma simples</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Cadastre leads direto do celular ou computador.</p>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-shadow duration-300" delay={0.6}>
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-6">
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Ranking e bonificações</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Bonificações para os top 3 do mês.</p>
                </div>
              </div>
            </SectionWrapper>
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 transition-shadow duration-300" delay={0.8}>
              <div className="flex items-start">
                <div className="bg-gray-100 rounded-full p-3 mr-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">Liberdade total</h3>
                  <p className="text-lg leading-relaxed text-gray-600">Sem metas obrigatórias, você escolhe quanto ganhar.</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </SectionWrapper>

      {/* Prova Social */}
      <SectionWrapper className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">O que dizem nossos freelancers</h2>
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              className="pb-12"
            >
              <SwiperSlide>
                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
                  <blockquote className="text-2xl italic mb-6 leading-relaxed text-gray-700">
                    "Indiquei 3 pacientes e já recebi meu bônus de fechamento no mesmo mês!"
                  </blockquote>
                  <cite className="text-lg font-medium text-gray-500">- Bruno Sandoval, Freelancer Investmoney</cite>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
                  <blockquote className="text-2xl italic mb-6 leading-relaxed text-gray-700">
                    "A plataforma é incrível! Consegui indicar 5 clínicas em apenas uma semana e o pagamento foi super rápido via PIX."
                  </blockquote>
                  <cite className="text-lg font-medium text-gray-500">- Gastão Santos, Freelancer Investmoney</cite>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
                  <blockquote className="text-2xl italic mb-6 leading-relaxed text-gray-700">
                    "Trabalho de casa, no meu horário, sem pressão. É perfeito para quem quer renda extra sem complicações."
                  </blockquote>
                  <cite className="text-lg font-medium text-gray-500">- Jorge Jordão, Freelancer Investmoney</cite>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Perguntas Frequentes</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200" delay={0.2}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Preciso ter experiência na área?</h3>
              <p className="text-lg leading-relaxed text-gray-600">Não, basta ter contatos e disposição.</p>
            </SectionWrapper>
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200" delay={0.4}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Quanto posso ganhar?</h3>
              <p className="text-lg leading-relaxed text-gray-600">Depende do número de fechamentos, não há limite.</p>
            </SectionWrapper>
            <SectionWrapper className="bg-white p-8 rounded-xl shadow-sm border border-gray-200" delay={0.6}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Quando recebo?</h3>
              <p className="text-lg leading-relaxed text-gray-600">Na primeira liquidação do fechamento, via PIX.</p>
            </SectionWrapper>
          </div>
        </div>
      </SectionWrapper>

      {/* Chamada final */}
      <section className="py-20 px-4 text-white" style={{background: 'var(--bg-hero-gradient)'}}>
        <div className="max-w-6xl mx-auto text-center">
          <SectionWrapper>
            <h2 className="text-3xl font-bold mb-8 leading-tight">
              Junte-se à nossa rede de captadores e comece a ganhar ainda hoje!
            </h2>
          </SectionWrapper>
          <SectionWrapper>
            <button 
              onClick={() => window.open('https://crm.investmoneysa.com.br/cadastro', '_blank')}
              className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-white text-black cursor-pointer"
            >
              Quero me cadastrar agora
            </button>
          </SectionWrapper>
        </div>
      </section>
    </div>
  )
}

export default App
