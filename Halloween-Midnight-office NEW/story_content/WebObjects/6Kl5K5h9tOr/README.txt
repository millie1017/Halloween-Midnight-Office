THE MIDNIGHT OFFICE — COVER
Uses a still frame from the supplied email video as a provisional background. Replace office.mov with a wider office shot later if preferred. No audio is included.
Insert this folder in Storyline as a Web Object on a blank first slide. Display in slide, load automatically, resize to fill slide. Publish to Review 360 to test.
START BUTTON CONNECTION (required)
The HTML sends a MIDNIGHT_COVER_START message to its parent. Add an Execute JavaScript trigger on the cover slide when timeline starts. Use the code in storyline-start-listener.js. It sets the True/False variable CoverStart to true. Create CoverStart in Storyline, default false. Then add a Jump to next slide trigger when variable CoverStart changes, condition CoverStart equals true. Reset CoverStart to false when the cover slide starts, before the JavaScript trigger.
The bridge must be tested after publishing; it does not automatically report completion or scores. If your Storyline publishing environment nests the Web Object differently, integration may require adjustment.
The HTML standalone preview does not navigate. The status message is replaced with a fade-out when the host confirms reception.

AUDIO UPDATE: supplied 60-second MP3 included as halloween.mp3. Click top-right Enable music to start; autoplay is not forced. Volume is 28%, looping enabled. Enter the office fades audio over 1.4 seconds before requesting next slide. Runtime playback and Storyline bridge still require published testing.
