QUIZ TRANSITION
Place a blank slide between door scene and first quiz question. Insert this folder as a full-slide local Web Object, load automatically. No audio, so it does not compete with scene sounds.
Change door slide DoorDone=True jump target to this transition slide; preserve door scoring logic.
Create True/False QuizStart variable default False. Transition slide triggers in order: (1) Timeline starts: QuizStart=False; (2) Timeline starts: Execute JavaScript from storyline-quiz-transition-listener.js; (3) When QuizStart changes: If QuizStart=True, Jump to Quiz question 1 (explicit slide).
No reset of quiz scores is implemented here; use native result-slide Retry Quiz for quiz retry. Publish to Review 360 to test. No runtime Storyline test has been performed.
