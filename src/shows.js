// src/shows.js
// Placeholder data for the "Catch Up" section.
// In a real application, this would come from a database or CMS.

export const shows = [
  {
    id: 1,
    title: 'Morning Breeze',
    description: 'The early morning show that gets you ready for the day.',
    thumbnailUrl: 'https://picsum.photos/seed/mb/400/225',
    videoUrl: 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8',
    views: 1850,
  },
  {
    id: 2,
    title: 'Delta News Hour',
    description: 'The biggest stories from around the nation, presented in detail.',
    thumbnailUrl: 'https://picsum.photos/seed/dnh/400/225',
    videoUrl: 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8',
    views: 3200,
  },
  {
    id: 3,
    title: 'Gospel Vibes',
    description: 'A selection of the best gospel music videos.',
    thumbnailUrl: 'https://picsum.photos/seed/gv/400/225',
    videoUrl: 'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
    views: 2500,
  },
  {
    id: 4,
    title: 'Youth Pulse',
    description: 'A show for the youth, by the youth.',
    thumbnailUrl: 'https://picsum.photos/seed/yp/400/225',
    videoUrl: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
    views: 1200,
  },
  {
    id: 5,
    title: 'Late Night Talk',
    description: 'Winding down the day with engaging conversations.',
    thumbnailUrl: 'https://picsum.photos/seed/lnt/400/225',
    videoUrl: 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8',
    views: 980,
  },
   {
    id: 6,
    title: 'Sports Arena',
    description: 'The latest in local and international sports.',
    thumbnailUrl: 'https://picsum.photos/seed/sa/400/225',
    videoUrl: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    views: 2100,
  },
];

export const liveStream = {
  title: 'Live TV',
  url: 'https://siloh-nslplutotv.net/lilo/production/bein/master.m3u8',
  // Mock data for live viewers
  liveViewers: 480, 
};