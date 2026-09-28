// 화면에 표시할 3단계 콘텐츠. 문구를 바꾸려면 이 배열만 수정하세요.
const steps = [
  { label: 'STEP 01 — SET THE WORLD', title: '모든 장면의 시작은<br />하나의 세계관.', description: '공통 스타일을 정하고 캐릭터와 분위기 참조 이미지를 설정해 보세요.', tags: ['STYLE PROMPT', 'CHARACTER', 'MOOD'] },
  { label: 'STEP 02 — DIRECT THE SCENE', title: '이야기의 순간을<br />장면으로 설계하세요.', description: '스토리 비트를 입력하면 장면 연출과 이미지 프롬프트를 차례로 살펴볼 수 있습니다.', tags: ['STORY BEAT', 'SCENE PLAN', 'VISUAL PROMPT'] },
  { label: 'STEP 03 — MAKE IT VISIBLE', title: '마음에 드는 장면을<br />이미지로 완성하세요.', description: '각 장면의 이미지를 필요할 때 생성하고 갤러리에서 결과를 확인하세요.', tags: ['GENERATE', 'REVIEW', 'GALLERY'] },
];

const tabs = Array.from(document.querySelectorAll('[data-step]'));
const panel = document.querySelector('#step-panel');

function selectStep(index, focus = false) {
  const step = steps[index];
  if (!step) return;
  tabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  document.querySelector('#previewLabel').textContent = step.label;
  document.querySelector('#previewTitle').innerHTML = step.title;
  document.querySelector('#previewDescription').textContent = step.description;
  document.querySelector('#previewProgress').textContent = `0${index + 1} / 03`;
  document.querySelector('#previewTags').replaceChildren(...step.tags.map((label) => {
    const tag = document.createElement('span');
    tag.textContent = label;
    return tag;
  }));
  panel.setAttribute('aria-labelledby', tabs[index].id);
  if (focus) tabs[index].focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectStep(index));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 :
      (index + (['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1) + tabs.length) % tabs.length;
    selectStep(next, true);
  });
});

const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#siteNav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
  nav.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
