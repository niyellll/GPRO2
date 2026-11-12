const topics = [
  { number: "01", title: "Kebijakan Publik", text: "Kajian strategis untuk memperkuat tata kelola, program pembangunan, dan keputusan berbasis bukti." },
  { number: "02", title: "Logistik & Rantai Pasok", text: "Analisis konektivitas wilayah, simpul logistik, daya saing, dan efektivitas sistem distribusi." },
  { number: "03", title: "Ekonomi & Fiskal", text: "Riset kebijakan yang menghubungkan potensi ekonomi, efektivitas fiskal, dan kesejahteraan." },
  { number: "04", title: "Pendidikan & SDM", text: "Penguatan kualitas sumber daya manusia melalui riset, pendidikan, dan peningkatan kapasitas." },
];

const works = [
  { type: "LOGISTIK & PEMBANGUNAN", title: "Kediri sebagai Hub Logistik 2045", text: "Kajian tentang peluang konektivitas, pengembangan wilayah, dan arah strategi rantai pasok." },
  { type: "INFRASTRUKTUR STRATEGIS", title: "Biaya Logistik dan Infrastruktur", text: "Analisis keterkaitan pembangunan infrastruktur, hambatan sistem distribusi, dan hasil ekonomi." },
  { type: "KEBIJAKAN FISKAL", title: "Indonesia Kaya, Tax Ratio Lemah", text: "Kajian mengenai tantangan mengubah potensi ekonomi menjadi kapasitas fiskal dan manfaat pembangunan." },
];

const values = [
  { title: "Research More", text: "Mempelajari persoalan secara mendalam melalui riset dan bukti yang dapat dipertanggungjawabkan." },
  { title: "Do More", text: "Menghubungkan hasil kajian dengan tindakan, prioritas, dan arah implementasi." },
  { title: "Teach More", text: "Mendorong berbagi pengetahuan untuk memperkuat kualitas manusia dan organisasi." },
];

function Heading({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return <div className="heading"><p className="kicker">{kicker}</p><h2>{title}</h2>{desc ? <p>{desc}</p> : null}</div>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-content">
          <span className="logomark" aria-hidden="true">G</span>
          <div className="identity"><strong>GPRO</strong><span>GLOBAL PRO-EKSISTENSI</span></div>
          <p className="header-caption">PUSAT KAJIAN STRATEGIS</p>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="kicker"><span className="dot" aria-hidden="true" /> RESEARCH · POLICY · IMPACT</p>
              <h1>Membaca Tantangan.<br/><em>Merumuskan Arah.</em><br/>Menciptakan Dampak.</h1>
              <p className="hero-description">Global Pro-eksistensi adalah pusat kajian strategis yang menghubungkan riset, kebijakan publik, dan solusi implementatif untuk pembangunan yang berdaya saing dan berkelanjutan.</p>
              <div className="accent-line" />
              <p className="motto">Research More <span>·</span> Do More <span>·</span> Teach More</p>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="visual-grid" />
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
              <div className="visual-brand"><strong>GPRO</strong><span>STRATEGIC RESEARCH</span></div>
              <span className="visual-caption top">POLICY / DATA / IMPACT</span>
              <span className="visual-caption bottom">RESEARCH MORE · DO MORE · TEACH MORE</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <Heading kicker="TENTANG GPRO" title="Dari pemahaman mendalam menuju keputusan yang berdampak." />
            <div className="prose">
              <p>Di tengah tantangan pembangunan yang semakin kompleks, Global Pro-eksistensi hadir sebagai ruang kajian dan pemikiran strategis. Kami menempatkan penelitian sebagai fondasi untuk memahami persoalan dan menyusun rekomendasi kebijakan.</p>
              <p>GPro berfokus pada isu pembangunan wilayah, logistik, ekonomi dan fiskal, kebijakan publik, pendidikan, serta penguatan sumber daya manusia.</p>
              <blockquote>Kebijakan yang kuat berawal dari pemahaman yang tepat terhadap masalah.</blockquote>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <Heading kicker="FOKUS KAJIAN" title="Bidang strategis yang kami pelajari." desc="Ruang lingkup riset lintas sektor untuk memahami tantangan dan merumuskan arah pembangunan." />
            <div className="topics">{topics.map(item => <article key={item.number} className="topic-card"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Heading kicker="FILOSOFI KERJA" title="Riset yang kuat. Tindakan yang nyata." desc="Tiga prinsip yang membentuk cara GPro memahami persoalan dan berkontribusi pada pembangunan." />
            <div className="values">{values.map((item,i) => <article className="value" key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <Heading kicker="SOROTAN KAJIAN" title="Pemikiran dan isu yang menjadi perhatian kami." desc="Tema-tema kajian strategis terkait logistik, pembangunan wilayah, dan kebijakan ekonomi." />
            <div className="works">{works.map(item => <article className="work" key={item.title}><span className="work-category">{item.type}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className="statement section">
          <div className="container statement-grid">
            <div><p className="kicker">GLOBAL PRO-EKSISTENSI</p><h2>Pengetahuan untuk tindakan.<br/>Riset untuk masa depan.</h2></div>
            <p>Berpikir strategis, bekerja berbasis bukti, dan berkontribusi pada pembangunan melalui kajian yang relevan bagi pengambilan keputusan.</p>
          </div>
        </section>

        <section className="section">
          <div className="container split contact">
            <div><Heading kicker="INFORMASI LEMBAGA" title="Mengenal GPro lebih dekat." desc="Informasi resmi Global Pro-eksistensi." /></div>
            <div className="contact-list">
              <div><span>LEMBAGA</span><strong>Global Pro-eksistensi</strong></div>
              <div><span>EMAIL</span><strong>pksgpro@gmail.com</strong></div>
              <div><span>WHATSAPP</span><strong>+62 858-9999-3742</strong></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="container footer-grid"><p><strong>GPRO</strong> · Global Pro-eksistensi</p><p>Research More · Do More · Teach More</p><p>© {new Date().getFullYear()} GPro. Hak cipta dilindungi.</p></div></footer>
    </>
  );
}
