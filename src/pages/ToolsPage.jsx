import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const REPOS = [
  {
    name: 'unity-art-tools',
    lang: 'C#',
    desc: 'Unity Editor utilities: batch import/export, asset audit, pivot baking, pre-build CI gate.',
    stack: ['C#', 'Unity Editor API'],
    url: 'https://github.com/PhanPhamjx/unity-art-tools',
    files: ['BatchAssetImporter.cs', 'AssetAuditWindow.cs', 'PivotOriginReset.cs', 'PreBuildValidator.cs'],
  },
  {
    name: 'material-name-validator',
    lang: 'PY',
    desc: 'Blender add-on + Maya script — validates and auto-fixes material naming conventions.',
    stack: ['Python', 'Blender API', 'Maya API'],
    url: 'https://github.com/PhanPhamjx/material-name-validator',
    files: ['material_validator_blender.py', 'material_validator_maya.py'],
  },
  {
    name: 'pipeline-checklist-tool',
    lang: 'PY',
    desc: 'PySide6 Qt desktop app: standardised art-pipeline checklist with JSON save and text export.',
    stack: ['Python', 'PySide6 / Qt'],
    url: 'https://github.com/PhanPhamjx/pipeline-checklist-tool',
    files: ['checklist_tool.py', 'checklist_config.json'],
  },
];

const TOOL_CARDS = [
  {
    lang: 'cs', langLabel: 'C#', filename: 'BatchAssetImporter.cs',
    title: 'Batch Asset Importer',
    body: 'Unity Editor window for art-team batch import / export with naming convention checks, FBX import preset routing, and a dry-run preview. Handles a few hundred meshes per pass.',
    foot: 'shipped · in daily use',
    repo: 'unity-art-tools',
  },
  {
    lang: 'cs', langLabel: 'C#', filename: 'AssetAuditWindow.cs',
    title: 'Asset Audit Tool',
    body: 'Editor scanner that walks a Resources folder and flags poly-count, texture size, draw call and memory budget violations against per-tier rules. Outputs a CSV report for producers.',
    foot: 'shipped · MMORPG mobile',
    repo: 'unity-art-tools',
  },
  {
    lang: 'cs', langLabel: 'C#', filename: 'PivotOriginReset.cs',
    title: 'Pivot & Origin Reset',
    body: 'Right-click context menu in the Project window — pick Bottom-Center, Bounds Center or World Origin, and the script bakes a new pivot. Also fixes scale-baking on imported FBX.',
    foot: 'shipped · saves 20m / day',
    repo: 'unity-art-tools',
  },
  {
    lang: 'cs', langLabel: 'C#', filename: 'PreBuildValidator.cs',
    title: 'Pre-build Validator',
    body: "Pre-build hook that runs before every GitLab push — checks LOD setup, collider presence, texture compression overrides, missing references, and breaks the build with a readable report.",
    foot: 'shipped · CI gate',
    repo: 'unity-art-tools',
  },
  {
    lang: 'py', langLabel: 'PY', filename: 'material_validator.py',
    title: 'Material Name Validator',
    body: 'Blender add-on + Maya script — validates M_<Name>_<Channel> convention across all scene materials, auto-maps loose aliases (diffuse → Alb, roughness → Rgh) and renames in one click.',
    foot: 'shipped · 2 studios',
    repo: 'material-name-validator',
  },
  {
    lang: 'py', langLabel: 'PY', filename: 'checklist_tool.py',
    title: 'Pipeline Checklist Tool',
    body: 'PySide6 Qt desktop app: 5-stage pipeline checklist (Modeling, UV, Texturing, Export, AD Review) with per-item required flags, progress bars, JSON session save and plain-text export.',
    foot: 'open source · configurable',
    repo: 'pipeline-checklist-tool',
  },
];

const REPO_URL = {
  'unity-art-tools':          'https://github.com/PhanPhamjx/unity-art-tools',
  'material-name-validator':  'https://github.com/PhanPhamjx/material-name-validator',
  'pipeline-checklist-tool':  'https://github.com/PhanPhamjx/pipeline-checklist-tool',
};

export default function ToolsPage() {
  return (
    <div className="about-page">
      <div className="wrap">
        <Reveal>
          <div className="pageheader">
            <span className="eyebrow">05 / Tools</span>
            <h1>
              Tools I've written{' '}
              <em>for art teams.</em>
            </h1>
            <p className="lede">
              Small Unity Editor utilities and Python pipeline scripts that pay for themselves in a sprint.
              Each one was born out of a repeat task eating 30+ minutes a day from somebody on the team.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ─── GITHUB REPOS ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="label">
                <span className="num">01 / Repos</span>
                <span>Open Source</span>
              </div>
              <div>
                <h2>Published on GitHub.</h2>
                <p className="lede">Three repos — installable, documented, ready to drop into a Unity project or DCC pipeline.</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="toolsgrid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {REPOS.map(repo => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="toolcard"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="toolcard-head">
                    <span className={`lang ${repo.lang.toLowerCase()}`}>{repo.lang}</span>
                    <span className="name">{repo.name}</span>
                  </div>
                  <div className="toolcard-body">
                    <h4>{repo.name}</h4>
                    <p>{repo.desc}</p>
                    <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {repo.files.map(f => (
                        <code key={f} style={{ fontSize: 10, background: 'var(--bg2)', padding: '2px 5px', borderRadius: 3 }}>{f}</code>
                      ))}
                    </div>
                  </div>
                  <div className="toolcard-foot">
                    <span style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {repo.stack.map(s => (
                        <span key={s} className="skill primary" style={{ fontSize: 11 }}>{s}</span>
                      ))}
                    </span>
                    <span style={{ fontSize: 12, opacity: 0.6 }}>GitHub ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── TOOL DETAIL CARDS ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="label">
                <span className="num">02 / Detail</span>
                <span>What each script does</span>
              </div>
              <div>
                <h2>Six scripts, one problem each.</h2>
                <p className="lede">
                  Built to solve specific friction points in production — not theoretical utilities.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="toolsgrid">
              {TOOL_CARDS.map((t, i) => (
                <a
                  key={i}
                  href={REPO_URL[t.repo]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="toolcard"
                  style={{ textDecoration: 'none' }}
                >
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
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
