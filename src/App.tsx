import { useState, useEffect, useRef } from 'react';
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
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in" style={{animationDelay: '4s', animationFillMode: 'both'}}>
            <button 
              onClick={() => window.open('https://crm.investmoneysa.com.br/cadastro', '_blank')}
              className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-white text-black cursor-pointer"
            >
              Quero ser Freelancer Investmoney
            </button>
            <button 
              onClick={() => setShowVideoModal(true)}
              className="px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-blue-900 hover:bg-blue-950 text-white cursor-pointer flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Ver Como Funciona
            </button>
          </div>
          
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
                  <p className="text-lg leading-relaxed text-gray-600">Receba 1% do valor de cada tratamento fechado.</p>
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

      {/* Chamada final e Contato */}
      <section className="py-20 px-4 text-white" style={{background: 'var(--bg-hero-gradient)'}}>
        <div className="max-w-6xl mx-auto text-center">
          <SectionWrapper>
            <h2 className="text-3xl font-bold mb-8 leading-tight">
              Junte-se à nossa rede de captadores e comece a ganhar ainda hoje!
            </h2>
            <p className="text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Trabalhe de onde quiser, sem horário fixo, e receba bônus por cada tratamento fechado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button 
                onClick={() => window.open('https://crm.investmoneysa.com.br/cadastro', '_blank')}
                className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-white text-black cursor-pointer"
              >
                Quero ser Freelancer Investmoney
              </button>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-blue-900 hover:bg-blue-950 text-white cursor-pointer flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Ver Como Funciona
              </button>
            </div>
            
          </SectionWrapper>
          
          {/* Contato */}
          <div className="mt-20 pt-16">
            <SectionWrapper>
              <h2 className="text-3xl font-bold mb-6 text-white">Tem dúvidas?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Mande mensagem para:
              </p>
              <a 
                href="https://wa.me/5541999647120?text=Olá! Gostaria de saber mais sobre o programa de freelancers da Investmoney."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                (41) 99964-7120
              </a>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Modal de Vídeo */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Como Funciona</h3>
              <button 
                onClick={() => {
                  setShowVideoModal(false);
                  if (videoRef.current) {
                    videoRef.current.pause();
                  }
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 pb-8">
              <div className="mb-8 flex justify-center">
                <video 
                  ref={videoRef}
                  controls 
                  className="w-full max-w-[70%] lg:max-w-[28%] rounded-lg shadow-lg"
                  poster="/logo.png"
                  autoPlay
                >
                  <source src="/IMG_6763.MOV" type="video/quicktime" />
                  <source src="/IMG_6763.MOV" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              
              <div className="text-center pb-4">
                <button 
                  onClick={() => {
                    window.open('https://crm.investmoneysa.com.br/cadastro', '_blank');
                    setShowVideoModal(false);
                  }}
                  className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-blue-900 hover:bg-blue-950 text-white cursor-pointer"
                >
                  Começar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
