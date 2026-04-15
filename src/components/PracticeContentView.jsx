import '../homepage.css';
import '../practices.css';
import { PRACTICES_DATA } from '../data/practicesData.js';

/* ─── School Food Environment content ─── */
function SchoolFoodContent({ idx }) {
  if (idx === 0) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">1</div>
          <div>
            <h3>School Meals</h3>
            <p>School meal programmes play an important role in providing balanced nutrition, food safety, and healthy eating habits among students.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Resources</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Strengthen quality, acceptance, and nutritional value of school meals</li>
              <li><span className="pp-res-bullet"></span>Monitor quality, menu balance, hygiene, and portion sizes</li>
              <li><span className="pp-res-bullet"></span>Ensure clean cooking areas, hygienic handling, and safe storage</li>
              <li><span className="pp-res-bullet"></span>Promote use of local and seasonal foods</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128161; Focus Areas</div>
            <h4>Key Priorities for School Meals</h4>
            <ul>
              <li>Balanced nutrition in every meal</li>
              <li>Food safety and hygiene standards</li>
              <li>Use of fresh, local, and seasonal ingredients</li>
              <li>Regular monitoring and quality checks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 1) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">2</div>
          <div>
            <h3>Meal Environment</h3>
            <p>Encouraging a calm and positive eating space where students do not waste food, practice mindful eating, and focus on proper chewing habits.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Key Practices</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Create a calm and positive eating space</li>
              <li><span className="pp-res-bullet"></span>Encourage students to eat without rushing</li>
              <li><span className="pp-res-bullet"></span>Promote mindful eating and proper chewing habits</li>
              <li><span className="pp-res-bullet"></span>Reduce food waste during meal times</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128161; Mindful Eating</div>
            <h4>Building a Positive Meal Environment</h4>
            <p>A supportive meal environment helps students develop a healthy relationship with food, reduces waste, and encourages them to appreciate and enjoy their meals.</p>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 2) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">3</div>
          <div>
            <h3>Healthy School Canteens</h3>
            <p>School canteens should support healthy food choices and reduce unhealthy options.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Resources</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Promote fresh, home-style, and nutritious foods</li>
              <li><span className="pp-res-bullet"></span>Ensure safe preparation and clean serving</li>
              <li><span className="pp-res-bullet"></span>Reduce high-fat, high-sugar, and processed foods</li>
            </ul>
            <h4 style={{ marginTop: 18 }}>Additional Resources</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Healthy Canteen Menu Examples</li>
              <li><span className="pp-res-bullet"></span>Foods to Encourage</li>
              <li><span className="pp-res-bullet"></span>Foods to Limit</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#9989; Canteen Guidelines</div>
            <h4>Healthy Canteen Priorities</h4>
            <ul>
              <li>Offer fresh fruits and home-style snacks</li>
              <li>Limit fried, sugary, and processed items</li>
              <li>Maintain hygiene in food preparation and serving</li>
              <li>Display healthy options prominently</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 3) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">4</div>
          <div>
            <h3>Visual Cues in School Environment</h3>
            <p>Visual reminders help students make better food choices.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Visual Tools</h4>
            <ul>
              <li><span className="pp-res-bullet"></span><strong>Sugar Board</strong> &ndash; Shows the sugar content in common foods and drinks</li>
              <li><span className="pp-res-bullet"></span><strong>Oil Board</strong> &ndash; Displays oil usage awareness for everyday foods</li>
              <li><span className="pp-res-bullet"></span><strong>Traffic Light System (FSSAI-based)</strong></li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128225; Traffic Light System</div>
            <h4>FSSAI-Based Traffic Light Guide</h4>
            <ul>
              <li><strong style={{ color: '#388E3C' }}>Green</strong> &ndash; Eat often (fresh fruits, vegetables, whole grains)</li>
              <li><strong style={{ color: '#F9A825' }}>Yellow</strong> &ndash; Eat sometimes (moderate fat/sugar foods)</li>
              <li><strong style={{ color: '#D32F2F' }}>Red</strong> &ndash; Eat rarely (high fat, high sugar, processed foods)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 4) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">5</div>
          <div>
            <h3>Food Compliance in School</h3>
            <p>Ensuring food brought or sold in school follows healthy guidelines.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Key Focus Areas</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Monitoring tiffin boxes for balanced and healthy content</li>
              <li><span className="pp-res-bullet"></span>Reducing unhealthy packaged snacks in school</li>
              <li><span className="pp-res-bullet"></span>Promoting awareness about healthy food choices</li>
              <li><span className="pp-res-bullet"></span>Encouraging healthy alternatives to junk food</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#9989; Compliance</div>
            <h4>Supporting Healthy Food Compliance</h4>
            <p>Schools can encourage healthier food habits by monitoring what students bring and buy, while promoting awareness and offering better alternatives.</p>
          </div>
        </div>
      </div>
    </section>
  );

  return null;
}

/* ─── Active Schools content ─── */
function ActiveSchoolsContent({ idx }) {
  if (idx === 0) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">1</div>
          <div>
            <h3>Movement Breaks</h3>
            <p>Short bursts of physical activity that help students re-energise during classroom learning.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>What Are Movement Breaks?</h4>
            <p style={{ fontSize: '0.88rem', color: '#616161', lineHeight: 1.65, marginBottom: 14 }}>
              Movement breaks involve short bursts of physical activity that increase blood circulation, improve oxygen flow to the brain, and help students refocus after extended periods of concentration.
            </p>
            <h4>Examples of Activities</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Jumping jacks</li>
              <li><span className="pp-res-bullet"></span>Marching in place</li>
              <li><span className="pp-res-bullet"></span>Arm circles</li>
              <li><span className="pp-res-bullet"></span>Cross-crawl movements</li>
            </ul>
            <div className="pp-info-section">
              <h4>Why Movement Breaks Help</h4>
              <ul>
                <li>Provide a quick mental and physical reset</li>
                <li>Improve focus and classroom engagement</li>
                <li>Increase energy and alertness</li>
                <li>Support better learning outcomes</li>
              </ul>
            </div>
            <div className="pp-info-section">
              <h4>Example 2-Minute Routine (Without Video)</h4>
              <div className="pp-routine-step"><strong>30 seconds</strong> Jumping jacks</div>
              <div className="pp-routine-step"><strong>30 seconds</strong> Stretch arms upward and bend sideways</div>
              <div className="pp-routine-step"><strong>30 seconds</strong> Cross-crawl march (touch opposite elbow to knee)</div>
              <div className="pp-routine-step"><strong>30 seconds</strong> Deep breathing and gentle shaking of arms and legs</div>
            </div>
          </div>
          <div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#127909; Video Resource</div>
              <h4>Short Classroom Movement Break</h4>
              <p style={{ marginBottom: 10 }}>The Learning Station</p>
              <div className="pp-video-embed">
                <iframe src="https://www.youtube.com/embed/JoF_d5sgGgc" title="Short Classroom Movement Break" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
              <div className="pp-info-section">
                <h4>How to Use in School</h4>
                <ul>
                  <li>Play the video and ask students to stand beside their desks and follow the movements</li>
                  <li>Encourage participation from all students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 1) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">2</div>
          <div>
            <h3>Stretching &amp; Yoga</h3>
            <p>Simple body movements and poses that help improve flexibility, posture, and relaxation.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>What Are Stretching &amp; Yoga Activities?</h4>
            <p style={{ fontSize: '0.88rem', color: '#616161', lineHeight: 1.65, marginBottom: 14 }}>
              Stretching and yoga activities involve simple body movements and poses that help improve flexibility, posture, and relaxation. They are especially useful after long periods of sitting and help develop balance, coordination, and body awareness.
            </p>
            <h4>Examples of Activities</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Tree pose</li>
              <li><span className="pp-res-bullet"></span>Side stretch</li>
              <li><span className="pp-res-bullet"></span>Forward bend</li>
              <li><span className="pp-res-bullet"></span>Gentle balance poses</li>
            </ul>
            <div className="pp-info-section">
              <h4>How to Use in School</h4>
              <ul>
                <li>Ask students to stand beside their desks or in an open space in the classroom</li>
                <li>Demonstrate simple stretches or play a short video guiding the poses</li>
                <li>Encourage students to move slowly and focus on their breathing while stretching</li>
                <li>The routine should take 2&ndash;3 minutes and can be repeated during longer sessions</li>
              </ul>
            </div>
            <div className="pp-info-section">
              <h4>Why Stretching &amp; Yoga Help</h4>
              <ul>
                <li>Improve flexibility and posture</li>
                <li>Reduce muscle fatigue and stiffness caused by prolonged sitting</li>
                <li>Support balance and coordination</li>
                <li>Promote relaxation and calmness, helping students refocus on learning</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="pp-example-card" style={{ marginBottom: 20 }}>
              <div className="pp-ex-badge">&#127909; Video Resource</div>
              <h4>Easy Yoga Poses for Kids</h4>
              <p style={{ marginBottom: 10 }}>Learn &amp; Shine with OVI</p>
              <div className="pp-video-embed">
                <iframe src="https://www.youtube.com/embed/jO-jIFgGJ4k" title="Easy Yoga Poses for Kids" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#127909; Video Resource</div>
              <h4>Yoga for Right &amp; Left Brain Coordination</h4>
              <p style={{ marginBottom: 10 }}>Yoga Guppy</p>
              <div className="pp-video-embed">
                <iframe src="https://www.youtube.com/embed/TVt905ndt4g" title="Yoga for Brain Coordination" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 2) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">3</div>
          <div>
            <h3>Breathing &amp; Mindfulness</h3>
            <p>Simple practices that help students relax, stay calm, and manage their thoughts and emotions.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <div className="pp-info-section">
              <h4>Benefits of Mindfulness Breaks</h4>
              <ul>
                <li>Reduces stress and anxiety</li>
                <li>Improves attention and emotional control</li>
                <li>Creates a calmer classroom environment</li>
              </ul>
            </div>
            <div className="pp-info-section">
              <h4>How to Use in Class</h4>
              <ul>
                <li>Ask students to sit comfortably at their desks with feet on the floor</li>
                <li>Encourage them to close their eyes or focus softly on one point</li>
                <li>Guide them through slow breathing or a mindfulness video</li>
                <li>Resume the lesson after the activity</li>
              </ul>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#616161', lineHeight: 1.6, marginTop: 14 }}>
              Teachers may also use short guided meditation videos.
            </p>
          </div>
          <div>
            <div className="pp-example-card" style={{ marginBottom: 20 }}>
              <div className="pp-ex-badge">&#127909; Activity Video</div>
              <h4>Five Finger Breathing</h4>
              <p style={{ marginBottom: 10 }}>Yoga Guppy</p>
              <div className="pp-video-embed">
                <iframe src="https://www.youtube.com/embed/CEOcsfGPQqg" title="Five Finger Breathing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#127909; Guided Meditation</div>
              <h4>Guided Meditation for Children</h4>
              <p style={{ marginBottom: 10 }}>The Whole Child</p>
              <div className="pp-video-embed">
                <iframe src="https://www.youtube.com/embed/iplZGpP2VO0" title="Guided Meditation for Children" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 3) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">4</div>
          <div>
            <h3>Daily Activity Routines</h3>
            <p>Simple activities integrated throughout the school day to keep students active and engaged.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <p style={{ fontSize: '0.88rem', color: '#616161', lineHeight: 1.65, marginBottom: 14 }}>
              While students are active during the PE period, they often remain seated for the rest of the day. To keep them active and engaged, simple activities can be integrated throughout the school day.
            </p>
            <p style={{ fontSize: '0.88rem', color: '#616161', lineHeight: 1.65, marginBottom: 14 }}>
              Schools can implement daily activities in two flexible ways:
            </p>
            <div className="pp-info-section">
              <h4>1. Day-wise Planning</h4>
              <p style={{ fontSize: '0.85rem', color: '#616161', marginBottom: 10 }}>Assign specific activities across the week.</p>
              <div className="pp-routine-step"><strong>Monday</strong> Movement Break</div>
              <div className="pp-routine-step"><strong>Tuesday</strong> Stretching &amp; Yoga</div>
              <div className="pp-routine-step"><strong>Wednesday</strong> Breathing Exercise</div>
              <div className="pp-routine-step"><strong>Thursday</strong> Mindfulness Activity</div>
              <div className="pp-routine-step"><strong>Friday</strong> Free Choice / Fun Activity</div>
            </div>
            <div className="pp-info-section">
              <h4>2. Time-wise Integration</h4>
              <p style={{ fontSize: '0.85rem', color: '#616161', marginBottom: 10 }}>Conduct activities at suitable times during the school day.</p>
              <div className="pp-routine-step"><strong>8:30 AM</strong> Morning Stretch (2&ndash;3 min)</div>
              <div className="pp-routine-step"><strong>10:00 AM</strong> Movement Break (2 min)</div>
              <div className="pp-routine-step"><strong>12:00 PM</strong> Breathing Exercise (2 min)</div>
              <div className="pp-routine-step"><strong>2:00 PM</strong> Mindfulness Break (2&ndash;3 min)</div>
            </div>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128161; Flexible Approach</div>
            <h4>Schools may choose the approach that best fits their schedule</h4>
            <ul>
              <li>If the day includes a PE period, the 2-minute wellbeing activity can be integrated as a warm-up or cool-down</li>
              <li>On days without PE, the activity may be conducted during morning assembly, mid-morning interval, after lunch, or during the zero period</li>
            </ul>
            <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 14, lineHeight: 1.6 }}>
              Schools may choose the approach that best fits their schedule and plan their routine accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  return null;
}

/* ─── Teacher Support content ─── */
function TeacherContent({ idx }) {
  if (idx === 0) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">1</div>
          <div>
            <h3>Teacher Orientation</h3>
            <p>Introduction and training materials for teachers new to the EWLW programme.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Resources</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Understand EWLW Framework and goals</li>
              <li><span className="pp-res-bullet"></span>Navigation Guide</li>
              <li><span className="pp-res-bullet"></span>Learning Resources for Classroom Support Tools</li>
              <li><span className="pp-res-bullet"></span>Demo Class: Integrating Habits into Daily Teaching</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#127891; Orientation</div>
            <h4>Getting Started with EWLW</h4>
            <ul>
              <li>Understand the EWLW framework and goals</li>
              <li>Learn how to navigate the platform</li>
              <li>Explore classroom support tools and resources</li>
              <li>Watch a demo class on integrating habits into daily teaching</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 1) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">2</div>
          <div>
            <h3>Classroom Tips</h3>
            <p>Ready-to-use, cluster-wise tips for integrating healthy habits into classroom discussions.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>ROUTINE Cluster</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Guide discussions on building consistent daily habits</li>
              <li><span className="pp-res-bullet"></span>Emphasise how routines improve focus</li>
              <li><span className="pp-res-bullet"></span>Encourage reflection on time management</li>
              <li><span className="pp-res-bullet"></span>Connect routines with well-being</li>
            </ul>
            <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 18 }}><strong>Example:</strong> Discuss how a fixed sleep and wake time helps students feel more alert and focused in class.</p>

            <h4>HEALTHY Cluster</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Facilitate conversations on balanced choices</li>
              <li><span className="pp-res-bullet"></span>Help students understand the link between food, energy, and growth</li>
              <li><span className="pp-res-bullet"></span>Encourage awareness of healthy vs unhealthy habits</li>
              <li><span className="pp-res-bullet"></span>Promote physical activity as part of daily life</li>
            </ul>
            <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 18 }}><strong>Example:</strong> Ask students to share one healthy meal they had today and what made it healthy.</p>

            <h4>MINDFUL Cluster</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Encourage awareness of thoughts, feelings, and actions</li>
              <li><span className="pp-res-bullet"></span>Create space for students to express freely</li>
              <li><span className="pp-res-bullet"></span>Discuss ways to stay calm under pressure</li>
              <li><span className="pp-res-bullet"></span>Build emotional regulation skills</li>
            </ul>
            <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 18 }}><strong>Example:</strong> After a short breathing activity, ask students how it felt and what they noticed.</p>

            <h4>RESPECT Cluster</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Promote empathy, kindness, and inclusion</li>
              <li><span className="pp-res-bullet"></span>Encourage respectful communication</li>
              <li><span className="pp-res-bullet"></span>Build awareness of responsible behaviour</li>
              <li><span className="pp-res-bullet"></span>Reinforce relationships and teamwork</li>
            </ul>
            <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 18 }}><strong>Example:</strong> Discuss what inclusion means and how students can make everyone feel welcome.</p>

            <h4>SUSTAIN Cluster</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Encourage responsible resource use</li>
              <li><span className="pp-res-bullet"></span>Build awareness of environmental impact</li>
              <li><span className="pp-res-bullet"></span>Promote sustainable daily habits</li>
              <li><span className="pp-res-bullet"></span>Connect individual actions with long-term wellbeing</li>
            </ul>
            <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 0 }}><strong>Example:</strong> Turning off lights when leaving a room, not wasting water, and reusing materials.</p>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 2) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">3</div>
          <div>
            <h3>Integrating Habits in Subjects</h3>
            <p>Ideas for weaving health and well-being topics into existing school subjects.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Subject Integration Ideas</h4>
            <ul>
              <li><span className="pp-res-bullet"></span><strong>Science:</strong> Food Groups and Nutrition &ndash; Classify foods, analyse tiffin contents, create balanced meal posters</li>
              <li><span className="pp-res-bullet"></span><strong>Social Studies:</strong> Food Systems and Sustainability &ndash; Explore where food comes from and the impact of food choices</li>
              <li><span className="pp-res-bullet"></span><strong>Language:</strong> Writing on Healthy Lifestyles &ndash; Essays, stories, and discussions on healthy habits</li>
              <li><span className="pp-res-bullet"></span><strong>Environmental Studies:</strong> Reducing Food Waste &ndash; Track and reduce food waste, understand environmental impact</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128300; Cross-Curricular</div>
            <h4>Example: Science &ndash; Food Groups and Nutrition</h4>
            <ul>
              <li>Classify foods into groups (carbohydrates, proteins, fats, vitamins)</li>
              <li>Students analyse their own tiffin contents</li>
              <li>Create a balanced meal poster as a group activity</li>
              <li>Aligns with NCERT Science curriculum</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 3) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">4</div>
          <div>
            <h3>Assessment &amp; Behaviour Change</h3>
            <p>Tools and methods to observe, assess, and support healthy habit adoption in the classroom.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Assessment Tools</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Simple ways to observe habit adoption in students</li>
              <li><span className="pp-res-bullet"></span>Questions for classroom discussions on healthy habits</li>
              <li><span className="pp-res-bullet"></span>Student self-assessment ideas</li>
              <li><span className="pp-res-bullet"></span>Quick feedback tools for teachers</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128203; Assessment</div>
            <h4>Tracking Habit Adoption</h4>
            <ul>
              <li>Observe changes in student behaviour over time</li>
              <li>Use guided questions to spark discussions</li>
              <li>Encourage students to self-reflect on their habits</li>
              <li>Collect quick feedback to improve activities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  return null;
}

/* ─── Family Engagement content ─── */
function FamilyContent({ idx }) {
  if (idx === 0) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">1</div>
          <div>
            <h3>Healthy Tiffin</h3>
            <p>Guidance for preparing balanced, nutritious tiffin boxes at home.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Balanced Tiffin Ideas</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Combine carbohydrates + protein + vegetables in every tiffin</li>
              <li><span className="pp-res-bullet"></span>Add a fruit or handful of nuts as a side</li>
            </ul>
            <h4 style={{ marginTop: 18 }}>Quick Healthy Recipes from Leftovers</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Dal Paratha &ndash; made from leftover dal</li>
              <li><span className="pp-res-bullet"></span>Khichdi Tikki &ndash; made from leftover khichdi</li>
            </ul>
            <h4 style={{ marginTop: 18 }}>Reducing Packaged Foods</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Swap chips and biscuits with fruits or homemade snacks</li>
              <li><span className="pp-res-bullet"></span>Limit foods high in sugar, salt, and fat</li>
              <li><span className="pp-res-bullet"></span>Avoid plastic containers &ndash; use steel or glass</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128161; Example</div>
            <h4>Balanced Tiffin Idea</h4>
            <p>Chapati roll + vegetable filling + fruit</p>
            <ul>
              <li>Covers grains, vegetables, and fruit groups</li>
              <li>No packaged or processed ingredients</li>
              <li>Easy to prepare in 10 minutes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 1) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">2</div>
          <div>
            <h3>Healthy Snacks</h3>
            <p>Nutritious snack options that children can enjoy at school and home.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Go-to Snack Ideas</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Fruits with nuts or seeds</li>
              <li><span className="pp-res-bullet"></span>Roasted chana, peanuts, or makhana</li>
              <li><span className="pp-res-bullet"></span>Vegetable sticks with curd dip</li>
              <li><span className="pp-res-bullet"></span>Sprouts chaat or boiled corn</li>
            </ul>
            <h4 style={{ marginTop: 18 }}>Quick Snacks from Leftovers</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Rice Bhel &ndash; from leftover rice</li>
              <li><span className="pp-res-bullet"></span>Roti Sandwich &ndash; from leftover roti</li>
              <li><span className="pp-res-bullet"></span>Dal Chilla &ndash; from leftover dal</li>
            </ul>
            <h4 style={{ marginTop: 18 }}>Reducing Packaged Food Consumption</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Replace packaged snacks with fresh, homemade alternatives</li>
              <li><span className="pp-res-bullet"></span>Read labels to avoid high sugar, salt, and fat content</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128161; Example</div>
            <h4>Roasted Chana Mix</h4>
            <ul>
              <li>High protein and fibre</li>
              <li>No added sugar</li>
              <li>Easy to carry and store</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 2) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">3</div>
          <div>
            <h3>Habits Beyond the Classroom: Family &amp; Community</h3>
            <p>Extending healthy habits from school into homes and communities through awareness and engagement.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Example Poster Topics for Families</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Healthy Eating at Home</li>
              <li><span className="pp-res-bullet"></span>Smart Snack Swaps</li>
              <li><span className="pp-res-bullet"></span>Protein-Rich Breakfasts</li>
              <li><span className="pp-res-bullet"></span>Balanced Family Meals</li>
              <li><span className="pp-res-bullet"></span>Tips for Reducing Sugar</li>
              <li><span className="pp-res-bullet"></span>Family Mealtime Habits</li>
              <li><span className="pp-res-bullet"></span>Mindful Eating at Home</li>
              <li><span className="pp-res-bullet"></span>Local &amp; Seasonal Foods</li>
              <li><span className="pp-res-bullet"></span>Stay Active as a Family</li>
              <li><span className="pp-res-bullet"></span>Healthy Habits for the Whole Family</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128227; Community</div>
            <h4>Building Healthy Habits Together</h4>
            <p>Schools can share posters, tips, and resources with families to encourage healthy practices at home and in the community.</p>
          </div>
        </div>
      </div>
    </section>
  );

  if (idx === 3) return (
    <section className="pp-category">
      <div className="hp-container">
        <div className="pp-cat-header">
          <div className="pp-cat-num">4</div>
          <div>
            <h3>School-Family Communication</h3>
            <p>Keeping families informed and involved in school health initiatives.</p>
          </div>
        </div>
        <div className="pp-cat-body">
          <div className="pp-resource-list">
            <h4>Communication Channels</h4>
            <ul>
              <li><span className="pp-res-bullet"></span>Regular updates on school activities, events, and workshops</li>
              <li><span className="pp-res-bullet"></span>Timely alerts for health awareness events</li>
              <li><span className="pp-res-bullet"></span>Opportunities for families to participate in school wellness activities</li>
            </ul>
          </div>
          <div className="pp-example-card">
            <div className="pp-ex-badge">&#128227; Stay Connected</div>
            <h4>Stay Connected with Your School</h4>
            <ul>
              <li>Receive updates on school health activities</li>
              <li>Get alerts for health awareness events</li>
              <li>Participate in workshops and wellness programmes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  return null;
}

/* ─── Main Component ─── */
export default function PracticeContentView({ practiceKey, tileIndex, onBack, onNavigate, onBackToHome }) {
  const practice = PRACTICES_DATA[practiceKey];
  if (!practice) return null;
  const tile = practice.tiles[tileIndex];

  return (
    <div className="hp-wrap pp-page" style={practice.style}>
      {/* Navbar */}
      <nav className="hp-navbar">
        <div className="hp-container">
          <button className="hp-nav-logo" onClick={onBackToHome}>
            <img src="/ewlw_logo.png" alt="EWLW" className="hp-logo-icon" />
            <div className="hp-logo-text">
              Eat Well. Live Well.
              <small>Healthy Habits for Schools</small>
            </div>
          </button>
          <div className="pp-nav-back">
            <button className="pp-back-btn" onClick={onBack} style={{ background: 'var(--pp-color)', border: 'none', color: '#fff', borderRadius: 'var(--radius-sm)', padding: '8px 18px', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer' }}>
              &larr; Back
            </button>
          </div>
        </div>
      </nav>

      {/* Compact Hero */}
      <section className="pp-hero" style={{ paddingBottom: 50 }}>
        <div className="hp-container">
          <div className="pp-hero-inner" style={{ paddingTop: 32 }}>
            {/* Breadcrumb */}
            <div className="pp-breadcrumb">
              <button onClick={onBackToHome}>Home</button>
              <span className="pp-breadcrumb-sep">/</span>
              <button onClick={() => onNavigate(practiceKey)}>{practice.heroTitle}</button>
              <span className="pp-breadcrumb-sep">/</span>
              <span className="pp-breadcrumb-current">{tile.label}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
              <span style={{ fontSize: '2.2rem' }}>{tile.icon}</span>
              <h1 style={{ fontSize: '1.8rem', margin: 0 }}>{tile.label}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {practiceKey === 'school-food' && <SchoolFoodContent idx={tileIndex} />}
      {practiceKey === 'active-schools' && <ActiveSchoolsContent idx={tileIndex} />}
      {practiceKey === 'teacher-engagement' && <TeacherContent idx={tileIndex} />}
      {practiceKey === 'family-engagement' && <FamilyContent idx={tileIndex} />}

      {/* Footer */}
      <footer className="hp-footer">
        <div className="hp-container">
          <div className="hp-footer-top">
            <div className="hp-footer-brand">
              <div className="hp-footer-logo-row">
                <img src="/fff_logo.png" alt="FFF" className="hp-footer-fff-logo" />
                <div className="hp-footer-logo">Eat Well. Live Well. Digital Platform</div>
              </div>
              <p>An initiative developed by <a href="https://foodfuturefoundation.org/" target="_blank" rel="noopener noreferrer" className="hp-footer-link"><strong>Food Future Foundation</strong></a>.<br />
              Implemented in partnership with <strong>Directorate of Education, Government of Delhi</strong>.</p>
              <div className="hp-social-links">
                <a href="https://www.linkedin.com/company/food-future-foundation/" target="_blank" rel="noopener noreferrer" className="hp-social-icon" title="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                <a href="https://www.instagram.com/foodfuturefoundation/" target="_blank" rel="noopener noreferrer" className="hp-social-icon" title="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              </div>
            </div>
            <div className="hp-footer-col">
              <h4>Platform</h4>
              <ul>
                <li><button onClick={onBackToHome}>Home</button></li>
                <li><button onClick={() => { onBackToHome(); setTimeout(() => document.getElementById('hp-learning')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Student Learning</button></li>
                <li><button onClick={() => { onBackToHome(); setTimeout(() => document.getElementById('hp-practices')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Healthy Practices</button></li>
                <li><button onClick={() => { onBackToHome(); setTimeout(() => document.getElementById('hp-resources')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Resources</button></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Practices</h4>
              <ul>
                <li><button style={practiceKey === 'school-food' ? { fontWeight: 700, color: practice.footerHighlight.color } : {}} onClick={() => practiceKey !== 'school-food' && onNavigate && onNavigate('school-food')}>Food Environment</button></li>
                <li><button style={practiceKey === 'active-schools' ? { fontWeight: 700, color: practice.footerHighlight.color } : {}} onClick={() => practiceKey !== 'active-schools' && onNavigate && onNavigate('active-schools')}>Active Schools</button></li>
                <li><button style={practiceKey === 'teacher-engagement' ? { fontWeight: 700, color: practice.footerHighlight.color } : {}} onClick={() => practiceKey !== 'teacher-engagement' && onNavigate && onNavigate('teacher-engagement')}>Teacher Support</button></li>
                <li><button style={practiceKey === 'family-engagement' ? { fontWeight: 700, color: practice.footerHighlight.color } : {}} onClick={() => practiceKey !== 'family-engagement' && onNavigate && onNavigate('family-engagement')}>Family Engagement</button></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Links</h4>
              <ul>
                <li><button>About</button></li>
                <li><button>Programme Guidelines</button></li>
                <li><button>Contact Support</button></li>
                <li><button>Privacy Policy</button></li>
              </ul>
            </div>
          </div>
          <div className="hp-footer-bottom">
            <span>&copy; 2026 Eat Well. Live Well. Programme. All rights reserved.</span>
            <div className="hp-footer-partners">
              <a href="https://foodfuturefoundation.org/" target="_blank" rel="noopener noreferrer" className="hp-partner-badge">Food Future Foundation</a>
              <span className="hp-partner-badge">Govt. of Delhi</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
