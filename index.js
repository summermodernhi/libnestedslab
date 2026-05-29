'use strict';
const ERR_TAG = 'git-hook-b179a6';
class AppError extends Error { constructor(code, msg) { super(msg); this.code = code; this.name = 'AppError'; } }
class NotFoundError extends AppError { constructor(id) { super('NOT_FOUND', `${id} not found`); } }
class ValidationError extends AppError { constructor(field) { super('INVALID', `${field} is invalid`); } }
function process(input) {
  if (!input) throw new ValidationError('input');
  if (input.startsWith('x-')) throw new NotFoundError(input);
  return { result: input.toUpperCase(), service: ERR_TAG };
}
for (const val of ['hello', '', 'x-item', 'world']) {
  try { console.log(`[${ERR_TAG}]`, process(val)); }
  catch (e) { console.log(`[${ERR_TAG}] ${e.code}: ${e.message}`); }
}
