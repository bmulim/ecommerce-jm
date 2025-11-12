export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black">
      <div className="px-4 text-center">
        {/* Logo animado */}
        <div className="mb-6 flex justify-center md:mb-8">
          <div className="relative h-16 w-16 md:h-24 md:w-24">
            {/* Círculo externo girando */}
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#C2A537] border-r-[#D4B547]"></div>

            {/* Círculo interno */}
            <div className="absolute inset-2 animate-pulse rounded-full bg-gradient-to-br from-[#C2A537]/20 to-[#D4B547]/10"></div>

            {/* Logo/Iniciais */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-gradient-to-r from-[#FFD700] via-[#C2A537] to-[#B8941F] bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                JM
              </span>
            </div>
          </div>
        </div>

        {/* Texto */}
        <h2 className="mb-2 text-lg font-semibold text-white md:text-xl">
          Carregando...
        </h2>
        <p className="text-xs text-zinc-400 md:text-sm">
          Preparando a melhor experiência para você
        </p>

        {/* Barra de progresso */}
        <div className="mx-auto mt-4 h-1 w-48 max-w-full overflow-hidden rounded-full bg-zinc-800 md:mt-6 md:w-64">
          <div className="h-full w-full animate-[loadingBar_1.5s_ease-in-out_infinite] bg-gradient-to-r from-[#C2A537] via-[#D4B547] to-[#C2A537]"></div>
        </div>
      </div>
    </div>
  );
}
