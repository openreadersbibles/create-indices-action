/* eslint-disable prettier/prettier */

/// https://github.com/markedjs/marked
import { marked } from "marked";
import { JSDOM } from 'jsdom';
/// https://github.com/cure53/DOMPurify
import DOMPurify, { WindowLike } from 'dompurify';

import { ProjectConfiguration } from '@models/ProjectConfiguration';

export async function getProjectDescription(project: ProjectConfiguration): Promise<string> {
    const window = new JSDOM('').window;
    const purify = DOMPurify(window as unknown as WindowLike);
    return purify.sanitize(await marked.parse(project.description));
}
