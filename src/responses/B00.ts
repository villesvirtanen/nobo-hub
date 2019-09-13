import { deserialize } from '../structures/Zone';

import { Response } from '../response';

/**
 * Response for A00 command
 */
export default new Response('B00', deserialize);
