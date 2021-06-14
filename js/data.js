/*
리더형-Leader
탐구형-Exploratory
감정형-Emotional 
사고형-Thinking
인식형-Recognition 
외교형-Diplomatic 
내향형-Introverted 
외향형-Extroverted 
판단형-Judgment 
직관형-Intuitive
감각형-Sensory 
논쟁형-Arguable
*/
const qnaList = [
  {
  q: '1. 눈을 떠보니 출근시간 10분전에 일어난 당신 ',
  a: [
    { answer: 'a. 자신의 상황을 정직하게 설명하고 죄송하다고 말씀드린다', type: ['Emotional', 'Thinking', 'Introverted', 'Judgment', 'Sensory'] },
    { answer: 'b. 긴급한 상황임을 강조하며 핑계를 댄다 ', type: ['Leader', 'Exploratory', 'Intuitive'] },
    { answer: 'c. 에라 모르겠다 일단 연차를 쓰고 본다 ', type: ['Recognition', 'Diplomatic','Introverted', 'Arguable' ] },
  ]
},
{
  q: '2. 오늘은 회의가 있는날 당신의 회의 준비 상태는? ',
  a: [
    { answer: 'a. 회의 시작전에 다급하게 준비한다', type: ['Diplomatic', 'Intuitive', 'Arguable'] },
    { answer: 'b. 즉흥적으로 자신의 머릿속에 있는 내용을 설명한다', type: ['Leader', 'Recognition', 'Extroverted', 'Sensory'] },
    { answer: 'c. 모든 상황에 대비하여 모든 자료를 준비했다', type: ['Exploratory', 'Emotional', 'Thinking', 'Introverted', 'Judgment']  },
  ]
},
{
  q: '3. 새로운 업무를 받은 당신, 어떻게 일을 시작할것인가?',
  a: [
    { answer: 'a. 기존에 있던 자료 외에 새로운 자료를 찾는다', type: ['Leader', 'Exploratory', 'Intuitive'] },
    { answer: 'b. 상사와 회사 직원들에게 조언을 구한다', type: ['Emotional', 'Recognition', 'Extroverted', 'Arguable'] },
    { answer: 'c. 원래 있던 회사 자료를 내 방식대로 정리한다', type: ['Thinking', 'Diplomatic', 'Introverted', 'Judgment', 'Sensory'] }
  ]
},
{
  q: '4. “오늘 점심 뭐 먹을까” 팀장님이 나에게 묻는다',
  a: [
    { answer: 'a. 평소에 팀장님이 좋아하시는 메뉴를 말한다', type: ['Emotional', 'Thinking', 'Diplomatic', 'Extroverted' ] },
    { answer: 'b. 회사 주변에 있는 맛집 리스트를 검색한다', type: ['Leader', 'Exploratory', 'Arguable'] },
    { answer: 'c. 눈치 없이 이때다 싶어 먹고싶던 것을 말한다', type: ['Recognition', 'Introverted', 'Judgment', 'Intuitive', 'Sensory'] },
  ]
},
{
  q: '5. 점심을 너무 많이 먹었나? 근무시간에 잠이 쏟아진다',
  a: [
    { answer: 'a. 정신을 차리기 위해 잠시 산책을 하고 온다', type: ['Thinking', 'Exploratory', 'Introverted', 'Sensory'] },
    { answer: 'b. 턱을 괴고 고민하는 척 몰래 잠을 잔다', type: ['Emotional', 'Recognition', 'Intuitive', 'Arguable']},
    { answer: 'c. 미리 준비해둔 카페인 음료를 꺼내 마신다', type: ['Recognition', 'Introverted', 'Judgment']  },
  ]
},

{
  q: '6. 바빠보이는 팀장님이 급하게 지시한 업무, 이해가 가지 않는다',
  a: [
    { answer: 'a. 팀장님께 바로 물어본 후 진행한다', type: ['Exploratory', 'Diplomatic', 'Extroverted', 'Judgment', 'Arguable'] },
    { answer: 'b. 눈치를 살피다가 여유가 생기면 질문한다 ', type: ['Emotional', 'Emotional'] },
    { answer: 'c. 내가 이해한 대로 빠르게 업무를 완료한다', type: ['Leader', 'Thinking', 'Recognition', 'Intuitive', 'Sensory'] },
  ]
},
  {
    q: '7. 비상계단에서 사내연애 커플을 목격했다',
    a: [
      { answer: 'a. 좋을때지 하면서 조용히 넘어간다', type: ['Leader', 'Emotional ', 'Recognition', 'Diplomatic', 'Judgment' ] },
      { answer: 'b. “이건 비밀인데..” 하면서 옆 사원에게 알려준다', type: ['Thinking', 'Introverted', 'Intuitive', 'Sensory'] },
      { answer: 'c. “둘이 뭐야뭐야~~~” 하면서 놀려준다', type: ['Exploratory', 'rabbit', 'horse', 'snake', 'dog', 'monkey' ] },
    ]
  },
  {
    q: '8. 작고 소중한 월급을 받은 당신의 행동은?',
    a: [
      { answer: 'a. 철저히 계획에 맞춰서 소비한다', type: ['Leader', 'Exploratory', 'Thinking', 'Introverted', 'Judgment'] },
      { answer: 'b. 평소 사고 싶던 것들을 다 산다', type: ['Emotional', 'Diplomatic', 'Extroverted', 'Intuitive'] },
      { answer: 'c. 하찮은 월급은 나중에 생각한다', type: ['cow', 'sheep', 'pig' ] },
    ]
  },
  {
    q: '9. 팀원이 같이 작업하던 내용들을 다 날렸다..',
    a: [
      { answer: 'a. 팀원에게 화를 낸 후 상사에게 보고한다', type: ['Thinking', 'Diplomatic', 'Extroverted', 'Arguable' ] },
      { answer: 'b. 전에 백업해 두었던 내용을 보여주며 복구 하라고 한다', type: ['Exploratory', 'Recognition', 'Judgment', 'Intuitive'] },
      { answer: 'c. 인내심을 발휘하여 처음부터 해결한다', type: ['Leader', 'Exploratory', 'Introverted', 'Sensory' ] },
    ]
  },
  {
    q: '10. 퇴근시간, 아직 남은 업무들 당신의 선택은?',
    a: [
      { answer: 'a. “편안한 환경이 최고지” 하며 집가서 한다', type: ['Exploratory', 'Emotional', 'Recognition', 'Introverted', 'Sensory'] },
      { answer: 'b. “나의 업무는 아직 남았다” 장인정신을 발휘해 마무리 한다', type: ['Leader', 'Thinking', 'Judgment'] },
      { answer: 'c. “에라 모르겠다” 내일 회사에 와서 한다', type: ['Diplomatic', 'Extroverted', 'Intuitive', 'Arguable'] },
    ]
  },
  {
    q: '11. 피곤에 찌든 당신, 상사가 갑자기 회식 제안을 한다',
    a: [
      { answer: 'a. 일단 밥은 얻어먹고 중간에 스리슬쩍 빠져나온다', type: ['Recognition', 'Introverted', 'Judgment', 'Intuitive' ] },
      { answer: 'b. “저 약속 있는데요” 선약이 있는척 피한다', type: ['Leader', 'Exploratory', 'Thinking', 'Sensory'] },
      { answer: 'c. “당연히 가야죠” 하며 비위를 맞춰준다', type: ['Emotional', 'Diplomatic', 'Extroverted', 'Arguable'] },
    ]
  },
  {
    q: '12. 퇴근 후 집 도착 5분전 회사에서 비상 전화가 걸려온다 ',
    a: [
      { answer: 'a. 무시한뒤 나중에 대충 끼워맞춰서 둘러댄다', type: ['Recognition', 'Extroverted', 'Intuitive', 'Arguable' ] },
      { answer: 'b. 다급하게 전화를 받고 회사로 간다', type: ['Exploratory', 'Emotional', 'Introverted', 'Sensory'] },
      { answer: 'c. 자신의 능력을 뿜내며 문제를 해결한다', type: ['Leader', 'Thinking', 'Extroverted', 'Judgment'] },
    ]
  }
]

const infoList = [
  {
    name: '대담하면서도 강한 의지의 소유자, 책임감 강한 팀장님',
    desc: '당신은 가능성에 열려있는 미래지향적인 사람입니다. 변화를 예견하고, 창조합니다. 경향과 흐름을 예측하여 정보를 연관시키고, 통합하는 것에 능통합니다. 세부적인 것에 대해 지루해하고 참지 못하지만 전체적인 면을 보는 것에는 누구보다 뛰어납니다. 하지만 어려움에 부딪치면 부정적인 관점에서 미래를 보려고 하고, 새로운 아이디어 개발에 무척 약합니다. 비관적인 사람이 되지 않도록 주의하세요!'
  },
  {
    name: '상상력이 풍부하며, 철두철미한 계획을 세우는, 팀 에이스 대리님',
    desc: '당신은 넓은 범위의 업무를 커버하는 일에 두각을 보이고 있습니다. 조직을 유연하게 만들고, 묵묵히 자기의 위치에서 필요한 업무를 수행합니다. 긍정적으로 행동하려고 노력하고, 자존감이 높은 경우가 많습니다. 눈썰미가 있고 다른 사람이 하는 일에 관심이 많아 뜻밖에 일에서 도움을 주기도 합니다. 비판을 받았을 때 다른 관점으로 받아들여 새로운 방안을 모색하는 능력을 키우는 것이 중요합니다. 자주 감정적으로 행동하지만 감정이 수그러들면 뒤끝이 없는 편입니다. 혼자서 일하는 것을 좋아하는 만큼 다른 사람과 어울리려고 노력해 보세요'
  },
  {
    name: '타인을 돕는데 열정적이고, 세심한, 사원들의 멘토 주임님',
    desc: '당신은 공감을 잘하고, 관계를 발전시킬 수 있는 능력을 갖고 있습니다. 타인의 관점들을 잘 이해하고 존중해 주며 함께 일하는 것을 즐깁니다. 우선 관계를 잘 형성하고, 후에 도전적인 것을 제시하며 동의할 수 있는 영역에서 빛을 발휘할 수 있습니다. 다른 사람들의 감정이나 가치관을 우선 인정하고, 분석하지 않도록 조심하는 것이 좋을 것 같습니다.'
  },
  {
    name: '사실에 근거하여 사고하는, 현실주의자 실장님',
    desc: '당신은 모든 일을 침착하고, 합리적으로 해결하려고 노력합니다. 객관적이고, 원칙적이며 평가를 잘합니다. 이것을 상대방에게 말할 때 논리적이고, 합리적이며, 간결하게 제시하는 것이 중요합니다. 다른 사람에 경쟁, 논쟁, 도전을 위협과 공격으로 받아들이지 않고, 그것을 이용하여 당신의 능력을 키워보세요! 하지만 토론할 때, 과도하게 감정적이거나 격렬해지는 것을 피하는 것이 필요합니다.'
  },
  {
    name: '모든 가능성을 염두에 두고, 어떤 것이든 관리하는데 뛰어난, 팀 총괄자 이사님 ',
    desc: '당신은 규칙의 필요성은 인정하지만 그보단 자유로운 생활을 좀 더 선호하고 있습니다. 일을 할 때에도 결과도 중요하지만, 그동안 어떻게 해왔는지 노력 여부를 더 중요시합니다. 자신의 가능성을 시험해 볼 수 있는 경험을 하는 것을 좋아합니다. 정리 좀 하라는 말을 자주 듣지만 정작 본인은 자신이 필요한 물건들은 어디 있는지 다 안다고 생각해서 안 하지만, 막상 찾아보면 그 자리에 없으니 정리를 조금 더 해보는 것이 어떨까요?'
  },
  {
    name: '넘치는 카리스마와 영향력으로 청중을 압도하는, 인싸이더 부사장님',
    desc: '당신은 사람들과 자유롭게 어울리기를 좋아하는 분위기 메이커입니다. 독립적인 성향을 가지고 있어 안정적인 삶보다 창의적이며 자유로운 삶을 갈망하고, 호기심이 많고 낯선 사람과도 쉽게 친해질 수 있습니다. 관심사가 다양하고, 흥미 있는 일은 빠르게 배웁니다. 필요한 정보를 획득하는 기술과 타고난 호기심이 있고, 의사소통에 뛰어나고 다른 사람의 열정에 불을 붙이는 재능이 있습니다. 고정 관념을 깨고 열심히 새로운 가능성을 찾아낸다면 좋은 결과를 얻을 수 있습니다.'
  },
  {
    name: '조용하고 신비로우며 샘솟는 영감으로 지칠 줄 모르는, 열정가득 인턴',
    desc: '당신은 사전에 모든 것을 인지한 뒤 경험을 하는 사람입니다. 어떤 일을 수행할 때 미리 계획하고 한 가지에 몰입하여 지속하는 능력이 뛰어납니다. 그들은 타인으로부터 에너지를 얻는 것이 아니라 스스로의 내면으로부터 에너지를 얻기 때문에 친구들에게 지나치게 의지하거나 의존하지 않고, 그래서 그들에게 더욱 정직하고 솔직할 수 있습니다. 하지만 여러 사람과 어울리는 것을 노력해보세요!'
  },
  {
    name: '주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적인, 수다쟁이 사원',
    desc: '당신은 활발하고, 활기가 넘치며, 열정적입니다. 행동을 통해 해결점을 찾고 관계를 위한 네트워크를 형성합니다. 광범위한 정보와 피드백을 제공하고, 다소 갈등이 있어도 언제나 최후에는 객관적인 조건에 알맞은 결정을 내립니다. 하지만 당신의 행동이 상대방의 기분을 상하게 할 수 있으니 주의하세요. 피드백과 의견은 즉각적으로 제공하고 몸을 앞쪽으로 기울이거나 고개를 끄덕이고, 미소 짓고 또는 눈을 마주치며 이야기한다면 상대방은 긍정적으로 생각할 것입니다. 갈등이나 문제가 발생하면, 그것을 직면하는 것에 두려움을 느끼지 마세요'
  },
  {
    name: '질서정연하고 잘 짜인 조직적인 삶을 사는, 까탈스러운 본부장님 ',
    desc: '방향을 가지고 체계적으로 일을 수행합니다. 미리미리 준비해서 여유롭게 끝을 내고, 미루지 않고 할 일을 먼저 합니다. 계획대로, 각본대로, 당신이 원래 그렇게 하기로 한대로, 예상한 반응대로, 노력한 그대로 상황이 흘러가기를 바랍니다. 이러한 성향 때문에 융통성이 없다는 말을 자주 듣고, 독선적인 태도를 보이기도 하지만 늘 다른 사람보다 어딘가 뛰어난 능력을 가지고 있기도 합니다.'
  },
  {
    name: '벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는, 자유분방한 대표님',
    desc: '당신은 가능성에 열려있는 미래지향적인 사람입니다. 변화를 예견하고, 창조합니다. 경향과 흐름을 예측하여 정보를 연관시키고, 통합하는 것에 능통합니다. 세부적인 것에 대해 지루해하고 참지 못하지만 전체적인 면을 보는 것에는 누구보다 뛰어납니다. 하지만 어려움에 부딪치면 부정적인 관점에서 미래를 보려고 하고, 새로운 아이디어 개발에 무척 약합니다. 비관적인 사람이 되지 않도록 주의하세요!'
  },
  {
    name: '대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한, 믿음직스러운 부장님',
    desc: '당신은 경험을 중시하고, 현재에 초점을 두는 사람입니다. 먹고 마시고 운동하는 것을 좋아하며, 대담하고 현실적인 성향으로 다양한 도구 사용에 능숙하며 관찰력이 뛰어납니다. 타당한 근거가 있다면 자신의 잘못을 인정합니다. 하지만 자신의 경험과 알고 있는 사실에만 근거하여 독선적인 태도를 취하고, 새로운 경험을 위해 소비적인 탐구를 합니다. 이상보다 현실을 추구하는 면이 필요할 것 같습니다.'
  },
  {
    name: '뜨거운 논쟁을 즐기며 지적인 도적을 두려워하지 않는, 대담한 과장님',
    desc: '당신은 박식하고 독창적이며 창의력이 풍부한 사람입니다. 다방면에 관심과 재능이 많고, 새로운 일을 시도하는 솔선력이 강하며 논리적입니다. 항상 다양하고 색다른 환경에서의 업무 및 변화를 추구한다 하지만 이러한 성격 때문에 일상적이고 세부적인 일을 경시하고 태만하기 쉽습니다. 관심을 갖고 있는 분야에서는 대단한 수행능력을 가지고 있지만 새로운 도전이 없는 일에는 흥미를 가지지 못하고, 자기주장이 강합니다. 상대방의 의견에 경청해보세요!'
  },
]
