/**
 * 🌙 Beyond Hours — Automated Live Instagram Sync Script
 * Fetches real-time followers, following, and post count from @beyondhours_
 * and automatically updates js/config.js
 */

const fs = require('fs');
const path = require('path');

const INSTAGRAM_HANDLE = 'beyondhours_';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
const CONFIG_PATH = path.join(__dirname, '..', 'js', 'config.js');

async function syncInstagramStats() {
  console.log(`🔍 Checking live stats for @${INSTAGRAM_HANDLE}...`);

  try {
    const response = await fetch(INSTAGRAM_URL, {
      headers: {
        'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    const match = html.match(/([0-9,.]+[KMkm]?)\s*Followers,\s*([0-9,.]+[KMkm]?)\s*Following,\s*([0-9,.]+[KMkm]?)\s*Posts/i);

    if (!match) {
      console.log('⚠️ Could not extract regex match from Instagram response. Keeping existing config.');
      return;
    }

    const followers = match[1].replace(/,/g, '').trim();
    const following = match[2].replace(/,/g, '').trim();
    const posts = match[3].replace(/,/g, '').trim();

    console.log(`✅ Live Instagram Stats Found: ${followers} Followers, ${following} Following, ${posts} Posts`);

    let configContent = fs.readFileSync(CONFIG_PATH, 'utf8');

    const statsRegex = /instagramStats:\s*\{[\s\S]*?posts:\s*[^,\n]+,[\s\S]*?followers:\s*[^,\n]+,[\s\S]*?following:\s*[^,\n]+,[\s\S]*?\}/;

    const newStatsBlock = `instagramStats: {
    posts: ${isNaN(posts) ? `"${posts}"` : posts},
    followers: ${isNaN(followers) ? `"${followers}"` : followers},
    following: ${isNaN(following) ? `"${following}"` : following},
    category: "Nightlife & Event Planning",
    bio: "we make plans you didn't know you needed. Where plans end, stories begin ♡ | 📍 Udaipur"
  }`;

    if (statsRegex.test(configContent)) {
      configContent = configContent.replace(statsRegex, newStatsBlock);
      fs.writeFileSync(CONFIG_PATH, configContent, 'utf8');
      console.log('🎉 Successfully synced live stats to js/config.js!');
    } else {
      console.log('⚠️ Could not match stats block in config.js');
    }

  } catch (error) {
    console.error('❌ Error syncing Instagram stats:', error.message);
  }
}

syncInstagramStats();
