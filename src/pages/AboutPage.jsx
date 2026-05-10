import { personalInfo } from '../data/projects';
import Reveal from '../components/Reveal';

const INSPECTOR_PANELS = [
  {
    label: 'Engines & Pipelines', count: '06',
    skills: [
      { label: 'Unity Built-in RP', primary: true },
      { label: 'Unity URP', primary: true },
      { label: 'Shader Graph', primary: true },
      { label: 'Unity Editor Scripting', primary: true },
      { label: 'Unreal Engine', primary: false },
      { label: 'GitLab · LFS', primary: false },
    ],
  },
  {
    label: '3D / 2D Software', count: '06',
    skills: [
      { label: 'Blender', primary: true },
      { label: 'Maya', primary: false },
      { label: 'ZBrush', primary: false },
      { label: 'Substance Painter', primary: true },
      { label: 'Marmoset Toolbag', primary: false },
      { label: 'Photoshop', primary: false },
    ],
  },
  {
    label: 'Programming', count: '06',
    skills: [
      { label: 'C# (Unity)', primary: true },
      { label: 'Python · PySide / Qt', primary: true },
      { label: 'HLSL', primary: true },
      { label: 'Shader Graph', primary: false },
      { label: 'SQL (basic)', primary: false },
      { label: 'Git / GitLab', primary: false },
    ],
  },
  {
    label: 'Specialties', count: '08',
    skills: [
      { label: 'Modeling (low / high poly)', primary: true },
      { label: 'Retopology', primary: false },
      { label: 'UV Layout', primary: false },
      { label: 'Baking', primary: false },
      { label: 'Lighting', primary: true },
      { label: 'Hand-paint', primary: false },
      { label: 'PBR Texturing', primary: true },
      { label: 'Digital Painting', primary: false },
    ],
  },
  {
    label: 'Other', count: '04', span2: true,
    skills: [
      { label: 'Generative AI for 2D / 3D Asset', primary: false },
      { label: 'AI-Assisted Coding (Claude Code) · Tooling, Shader R&D', primary: false },
      { label: 'English · Technical Reading', primary: false },
      { label: 'Mobile Performance Profiling', primary: false },
    ],
  },
];

const TOOL_CARDS = [
  {
    lang: 'cs', langLabel: 'C#', filename: 'BatchAssetImporter.cs',
    title: 'Batch Asset Importer',
    body: 'Unity Editor window for art-team batch import / export with naming convention checks, FBX import preset routing, and a dry-run preview. Handles a few hundred meshes per pass.',
    foot: 'shipped · in daily use',
  },
  {
    lang: 'cs', langLabel: 'C#', filename: 'AssetAuditWindow.cs',
    title: 'Asset Audit Tool',
    body: 'Editor scanner that walks a Resources folder and flags poly-count, texture size, draw call and memory budget violations against per-tier rules. Outputs a CSV report for producers.',
    foot: 'shipped · MMORPG mobile',
  },
  {
    lang: 'cs', langLabel: 'C#', filename: 'PivotOriginReset.cs',
    title: 'Pivot & Origin Reset',
    body: 'Right-click context menu in the Project window — pick a vertex, the bottom-center, or the bounding box, and the script bakes a new pivot via a dummy parent transform. Also fixes scale-baking on imported FBX.',
    foot: 'shipped · saves 20m / day',
  },
  {
    lang: 'cs', langLabel: 'C#', filename: 'PreBuildValidator.cs',
    title: 'Pre-build Validator',
    body: 'Pre-build hook that runs before pushing to GitLab — checks LOD setup, collider presence, texture compression overrides, missing references, and breaks the build with a readable report if anything\'s off.',
    foot: 'shipped · CI gate',
  },
  {
    lang: 'py', langLabel: 'PY', filename: 'dcc_pipeline.py',
    title: 'DCC Automation (Python)',
    body: 'Maya / Blender side-scripts with PySide / Qt UIs — batch UV layout, retopo cleanup helpers, and an export-to-Unity wrapper that enforces our scale, axis and naming rules at source.',
    foot: 'internal · 2 studios',
  },
  {
    lang: 'hlsl', langLabel: 'HLSL', filename: 'env_shader_pack.shader',
    title: 'Environment Shader Pack',
    body: 'URP Shader Graph + HLSL hybrid: water with foam masks, height-fog, vertex foliage wind, and a generic dissolve with edge-glow. Tuned for mid-tier mobile (Adreno 6xx and up).',
    foot: 'shipped · Phong Thần 3D',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="wrap">
        <Reveal>
          <div className="pageheader">
            <span className="eyebrow">03 / About</span>
            <h1>
              Phạm Thanh Tùng,{' '}
              <em>Generalist 3D &amp; Technical Artist.</em>
            </h1>
            <p className="lede">
              3+ years building maps, shaders and tools for mobile MMORPGs and
              Nintendo Switch / PC / PS titles. Currently at SaboGame, headed deeper into Technical Art.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ─── BIO + FACTSHEET ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="about-grid">
              <div className="about-portrait">
                {personalInfo.avatar ? (
                  <img src={personalInfo.avatar} alt={personalInfo.name} />
                ) : (
                  <div className="about-portrait-placeholder">Drop portrait (3:4)</div>
                )}
              </div>

              <div>
                <div className="about-text">
                  <p>
                    I'm a Generalist 3D Artist with a Technical Art lean, based in Hà Nội. My day-to-day
                    is building scenes and maps that ship — blockout, set-dressing, lighting, and the
                    optimization pass that makes them run on the target device.
                  </p>
                  <p>
                    I've worked on mobile MMORPGs as well as a handful of titles for Nintendo Switch, PC
                    and PlayStation. My main engine is Unity (Built-in, URP, Shader Graph, Editor scripting)
                    and I work in Unreal for console projects.
                  </p>
                  <p>
                    Alongside art, I write tools — Unity Editor utilities in C# and pipeline / DCC automation
                    in Python (with Qt UIs) — to cut repeat work and keep our team's builds clean. I'm
                    comfortable enough in HLSL and Shader Graph to author production shaders and VFX for
                    environments.
                  </p>
                  <p>
                    What I'm chasing right now: going deeper as a Technical Artist, raising visual quality
                    without hurting frame budgets, and shortening the path from concept to a playable scene.
                  </p>
                </div>

                <div className="factsheet" aria-label="Fact sheet">
                  <div className="row"><div className="k">Name</div><div className="v">Phạm Thanh Tùng</div></div>
                  <div className="row"><div className="k">Role</div><div className="v">Generalist 3D · Technical Artist</div></div>
                  <div className="row"><div className="k">Based</div><div className="v">Hà Nội, Việt Nam (UTC+7)</div></div>
                  <div className="row"><div className="k">Experience</div><div className="v">3+ years (since 2022)</div></div>
                  <div className="row"><div className="k">Current</div><div className="v">Generalist 3D &amp; TA · SaboGame · 2025 → now</div></div>
                  <div className="row"><div className="k">Previously</div><div className="v">Generalist 3D · Kamework Studio · 2023 – 2025</div></div>
                  <div className="row"><div className="k">Languages</div><div className="v">Tiếng Việt (native), English (technical reading)</div></div>
                  <div className="row"><div className="k">Status</div><div className="v accent">● Open · 2026 Q2 · FT or Contract</div></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SKILLS / INSPECTOR ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="label">
                <span className="num">04 / Stack</span>
                <span>Skills &amp; Tools</span>
              </div>
              <div>
                <h2>What's in the inspector.</h2>
                <p className="lede">
                  Day-to-day tools, organised the way I'd lay them out in an Inspector panel.
                  Items in mint are the ones I reach for first.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="inspector">
              {INSPECTOR_PANELS.map((panel, i) => (
                <div
                  key={i}
                  className={`inspector-panel${panel.span2 ? ' span-2' : ''}`}
                >
                  <div className="inspector-head">
                    <span>{panel.label}</span>
                    <span className="count">{panel.count}</span>
                  </div>
                  <div className="inspector-body">
                    {panel.skills.map((s, j) => (
                      <span key={j} className={`skill${s.primary ? ' primary' : ''}`}>
                        {s.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TOOLS / SCRIPTS ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="label">
                <span className="num">05 / Builds</span>
                <span>Tools / Scripts</span>
              </div>
              <div>
                <h2>Tools I've written for art teams.</h2>
                <p className="lede">
                  Small Unity Editor utilities and Python pipeline scripts that pay for themselves in a sprint.
                  Each one was born out of a repeat task eating 30+ minutes a day from somebody on the team.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="toolsgrid">
              {TOOL_CARDS.map((t, i) => (
                <div key={i} className="toolcard">
                  <div className="toolcard-head">
                    <span className={`lang ${t.lang}`}>{t.langLabel}</span>
                    <span className="name">{t.filename}</span>
                  </div>
                  <div className="toolcard-body">
                    <h4>{t.title}</h4>
                    <p>{t.body}</p>
                  </div>
                  <div className="toolcard-foot">
                    <span className="ok">●</span>
                    <span>{t.foot}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
