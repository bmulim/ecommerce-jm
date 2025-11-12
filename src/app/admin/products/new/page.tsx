"use client";

import {
  ArrowLeft,
  Camera,
  Check,
  Image as ImageIcon,
  Info,
  Layers,
  Loader2,
  Save,
  Settings,
  Tag,
  Upload,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";
import { type ReactNode, useState } from "react";

const categories = [
  "Sneakers",
  "Athleisure",
  "Basics",
  "Outerwear",
  "Acessórios",
];

const brands = ["JM Original", "JM Studio", "JM Basics", "Collab X"];

const RESERVED_SLUGS = [
  "sneaker-jm-flow",
  "jaqueta-cloudguard",
  "legging-future-x",
] as const;

const normalizeSlug = (value: string) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-") || "novo-produto";

const generateUniqueSlug = (value: string, taken: readonly string[]) => {
  const base = normalizeSlug(value || "novo-produto");
  const takenSet = new Set(taken.map((item) => item.toLowerCase()));

  if (!takenSet.has(base)) {
    return base;
  }

  let counter = 2;
  let candidate = `${base}-${counter}`;

  while (takenSet.has(candidate)) {
    counter += 1;
    candidate = `${base}-${counter}`;
  }

  return candidate;
};

const generateTempId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const inputClasses =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export default function ProductCreatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productName, setProductName] = useState("");
  const [slugValue, setSlugValue] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [variantList, setVariantList] = useState([
    {
      id: generateTempId(),
      name: "Padrão",
      sku: "SKU-0001",
      color: "",
      size: "",
      price: "",
      stock: "",
    },
  ]);

  const handleAddVariant = () => {
    setVariantList((prev) => [
      ...prev,
      {
        id: generateTempId(),
        name: `Variante ${prev.length + 1}`,
        sku: "",
        color: "",
        size: "",
        price: "",
        stock: "",
      },
    ]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Produto cadastrado (mock). Conecte à API para salvar de fato.");
    }, 900);
  };

  const handleGenerateSlug = () => {
    const nextSlug = generateUniqueSlug(
      productName.trim() || "novo-produto",
      RESERVED_SLUGS,
    );
    setSlugValue(nextSlug);
    setSlugManuallyEdited(false);
  };

  const handleNameChange = (value: string) => {
    setProductName(value);
    if (!slugManuallyEdited) {
      setSlugValue(generateUniqueSlug(value || "novo-produto", RESERVED_SLUGS));
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.5em]">
              Product Studio
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Cadastro de produto</h1>
            <p className="mt-2 text-sm text-zinc-400">
              Organize atributos, inventário e mídia antes de enviar ao catálogo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-primary/60 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
            <Link
              href="/admin/inventory"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-primary/60 hover:text-white"
            >
              <Layers className="h-4 w-4" />
              Ver estoque
            </Link>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Tag className="text-primary h-5 w-5" />
              <div>
                <p className="text-sm text-zinc-400">Identidade</p>
                <h2 className="text-2xl font-semibold">Dados principais</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="Nome do produto" required>
                <input
                  className={inputClasses}
                  placeholder="Ex.: Sneaker JM Flow"
                  value={productName}
                  onChange={(event) => handleNameChange(event.target.value)}
                  required
                />
              </Field>
              <Field label="Slug único" required helper="Usado para URL da PDP.">
                <div className="flex gap-2">
                  <input
                    className={inputClasses}
                    placeholder="sneaker-jm-flow"
                    value={slugValue}
                    onChange={(event) => {
                      setSlugValue(event.target.value);
                      setSlugManuallyEdited(true);
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleGenerateSlug}
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white transition hover:border-primary/60 hover:text-primary"
                  >
                    Gerar
                  </button>
                </div>
              </Field>
              <Field label="Categoria" required>
                <select className={inputClasses} required defaultValue="">
                  <option value="" disabled>
                    Selecione
                  </option>
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </Field>
              <Field label="Marca" required>
                <select className={inputClasses} required defaultValue="">
                  <option value="" disabled>
                    Selecione
                  </option>
                  {brands.map((brand) => (
                    <option key={brand}>{brand}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="Badge destacada">
                <input
                  className={inputClasses}
                  placeholder="LIMITED, DROP 01..."
                />
              </Field>
              <Field label="Status">
                <select className={inputClasses} defaultValue="draft">
                  <option value="draft">Rascunho</option>
                  <option value="active">Publicado</option>
                  <option value="archived">Arquivado</option>
                </select>
              </Field>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Info className="text-primary h-5 w-5" />
              <div>
                <p className="text-sm text-zinc-400">Conteúdo</p>
                <h2 className="text-2xl font-semibold">Descrição & benefícios</h2>
              </div>
            </div>
            <div className="mt-6 space-y-6">
              <Field label="Descrição detalhada" required>
                <textarea
                  className={`${inputClasses} min-h-[120px]`}
                  placeholder="Explique diferenciais, tecnologia, conforto..."
                  required
                />
              </Field>
              <Field label="Benefícios (separe por vírgula)">
                <input
                  className={inputClasses}
                  placeholder="Respirável, apoio anatômico, solado memory foam"
                />
              </Field>
              <Field label='Especificações técnicas (JSON)' helper='Ex.: {"material":"Nylon"}'>
                <textarea
                  className={`${inputClasses} font-mono text-xs`}
                  placeholder='{"material":"Poliamida","peso":"420g"}'
                />
              </Field>
              <Field label="Como usar">
                <textarea
                  className={`${inputClasses} min-h-[80px]`}
                  placeholder="Dicas de lavagem, armazenamento e combinações."
                />
              </Field>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Settings className="text-primary h-5 w-5" />
              <div>
                <p className="text-sm text-zinc-400">Variantes</p>
                <h2 className="text-2xl font-semibold">Cores, tamanhos e preços</h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {variantList.map((variant, index) => (
                <div
                  key={variant.id}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    Variante {index + 1}
                  </p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <Field label="Nome">
                      <input className={inputClasses} defaultValue={variant.name} />
                    </Field>
                    <Field label="SKU" required>
                      <input
                        className={inputClasses}
                        placeholder="SNK-FLW-BLK-41"
                        required
                      />
                    </Field>
                    <Field label="Cor">
                      <input className={inputClasses} placeholder="Black Carbon" />
                    </Field>
                    <Field label="Tamanho">
                      <input className={inputClasses} placeholder="41 / M / Único" />
                    </Field>
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <Field label="Preço (R$)" required>
                      <input
                        className={inputClasses}
                        type="number"
                        min={0}
                        placeholder="629,90"
                        required
                      />
                    </Field>
                    <Field label="Preço antigo (R$)">
                      <input className={inputClasses} type="number" min={0} />
                    </Field>
                    <Field label="Estoque disponível" required>
                      <input
                        className={inputClasses}
                        type="number"
                        min={0}
                        required
                      />
                    </Field>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddVariant}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-white/20 py-3 text-sm text-zinc-300 transition hover:border-primary/60 hover:text-white"
              >
                <WandSparkles className="h-4 w-4" />
                Adicionar nova variante
              </button>
            </div>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Camera className="text-primary h-5 w-5" />
              <div>
                <p className="text-sm text-zinc-400">Mídia</p>
                <h2 className="text-2xl font-semibold">Galeria & assets</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-dashed border-white/15 bg-black/30 p-6 text-center text-sm text-zinc-400">
                <Upload className="mx-auto mb-3 h-6 w-6 text-primary" />
                Arraste ou selecione fotos do produto
                <p className="text-xs text-zinc-500">PNG, JPG até 8MB</p>
              </div>
              <div className="rounded-2xl border border-dashed border-white/15 bg-black/30 p-6 text-center text-sm text-zinc-400">
                <ImageIcon className="mx-auto mb-3 h-6 w-6 text-primary" />
                Defina thumbnail principal
                <p className="text-xs text-zinc-500">Resolução mínima 1200px</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-zinc-400">
              <p className="font-semibold text-white">Checklist rápido</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs">
                <li>Fotos front/back + detalhe</li>
                <li>Arquivo com fundo transparente para vitrines</li>
                <li>Vídeo 15s destacado (opcional)</li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Check className="text-primary h-5 w-5" />
              <div>
                <p className="text-sm text-zinc-400">Publicação</p>
                <h2 className="text-2xl font-semibold">Revisão final</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="Disponibilidade">
                <select className={inputClasses}>
                  <option>Em estoque</option>
                  <option>Em pré-venda</option>
                  <option>Indisponível</option>
                </select>
              </Field>
              <Field label="Visibilidade">
                <select className={inputClasses}>
                  <option>Catálogo principal</option>
                  <option>Só landing dedicada</option>
                  <option>Oculto</option>
                </select>
              </Field>
              <Field label="SEO title">
                <input
                  className={inputClasses}
                  placeholder="JM Store | Sneaker Flow"
                />
              </Field>
              <Field label="SEO description">
                <textarea
                  className={`${inputClasses} min-h-[80px]`}
                  placeholder="Resumo para motores de busca e social."
                />
              </Field>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-zinc-500">
                Dica: utilize status rascunho para trabalhar com squad de mídia antes
                de liberar ao público.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary/90 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Salvando
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    Salvar produto
                  </>
                )}
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  helper,
  required,
  children,
}: {
  label: string;
  helper?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="text-sm text-zinc-400">
      <span className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {label}
        {required && <span className="text-primary">*</span>}
      </span>
      {children}
      {helper && <span className="mt-1 block text-xs text-zinc-500">{helper}</span>}
    </label>
  );
}
